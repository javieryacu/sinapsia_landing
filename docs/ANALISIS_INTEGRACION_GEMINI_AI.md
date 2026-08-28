# 🧠 SinapsIA Inteligente — Análisis de Integración con Gemini AI

Documento de diseño técnico y funcional para la integración de la API de Google Gemini en el CRM SinapsIA, basado en la metodología comercial consultiva del Playbook.

---

## 📌 Principio Rector

> *"No vendemos software por catálogo. Detectamos problemas y diseñamos la solución adecuada."*  
> — Playbook SinapsIA §1

La IA no se integra por novedad, sino para:
1. **Asistir al consultor comercial/técnico** en la estructuración de diagnósticos de alto nivel.
2. **Eliminar tareas repetitivas de redacción** (informes, minutas, follow-ups).
3. **Extraer valor y patrones** a partir de notas desestructuradas y llamadas.

---

## 🔴 Prioridad Alta — Fase 1 (Impacto Inmediato)

### 1. Asistente de Diagnóstico (Diagnostic Copilot)
* **Ubicación en UI:** Drawer de detalle de la oportunidad (`/dashboard/pipeline`).
* **Función:** Analiza las notas de follow-up, el `problemDescription` y los datos de la empresa para generar automáticamente la cadena metodológica del Playbook (§9):
  $$\text{Síntoma} \longrightarrow \text{Causa} \longrightarrow \text{Impacto} \longrightarrow \text{Oportunidad} \longrightarrow \text{Solución}$$
* **Outputs:**
  - Diagnóstico estructurado.
  - Sugerencia de `solutionType` (*Optimizar, Automatizar, Integrar, IA, Desarrollar, Combinado*).
  - Sugerencia de `priority` (*Alta, Media, Baja* según urgencia y retorno).
* **Endpoint propuesto:** `POST /api/ai/diagnose`

### 2. Generador de Informe Ejecutivo de Diagnóstico
* **Ubicación en UI:** Botón *"Generar Informe"* en oportunidades en etapa `DIAGNOSTICO` o superior.
* **Función:** Compila todo el historial de la oportunidad y redacta el borrador formal del informe de 7 secciones (Manual 02):
  1. Resumen Ejecutivo
  2. Situación Actual y Sistemas Evaluados
  3. Problemas y Fricciones Detectadas
  4. Oportunidades Identificadas
  5. Priorización (Quick Wins vs. Proyecto Core)
  6. Recomendación SinapsIA
  7. Próxima Etapa
* **Endpoint propuesto:** `POST /api/ai/report`

### 3. Generador de Mensajes de Follow-up Contextual
* **Ubicación en UI:** Formulario de interacciones en el Drawer de Oportunidad y en `/dashboard/activities`.
* **Función:** Genera propuestas de mensajes para WhatsApp o Email basados en:
  - Etapa actual del embudo.
  - Días transcurridos desde el último contacto.
  - Temas tratados en la última minuta.
  - Cumplimiento de la regla de oro: *"Aportar valor en cada contacto, no solo preguntar si pudieron verlo"*.
* **Endpoint propuesto:** `POST /api/ai/followup`

---

## 🟡 Prioridad Media — Fase 2 (Eficiencia Operativa)

### 4. Extractor Inteligente de Notas (Parse & Fill)
* **Ubicación en UI:** Modal de *"Nueva Oportunidad"* / *"Nueva Empresa"* (Botón *"Cargar desde texto/audio"*).
* **Función:** El consultor pega un texto sin formato (notas rápidas de una reunión, transcripción de audio o chat de WhatsApp) y Gemini extrae los campos clave:
  - Nombre de la Empresa y Contacto (con detección de tomador de decisiones).
  - Problema principal detectado.
  - Presupuesto o valor estimado en USD (si se conversó).
  - Tipo de solución sugerida.
* **Endpoint propuesto:** `POST /api/ai/parse-notes`

### 5. Alertas e Insights Proactivos del Pipeline
* **Ubicación en UI:** Dashboard principal (`/dashboard`) y barra superior.
* **Función:** Analiza el estado global de las oportunidades y emite sugerencias estratégicas:
  - Detección de prospectos estancados en diagnóstico.
  - Alertas de pérdida recurrente por motivo de precio o alcance.
  - Detección de rubros con mayor tasa de éxito.
* **Endpoint propuesto:** `POST /api/ai/insights`

### 6. Asistente para Manejo de Objeciones
* **Ubicación en UI:** Acceso contextual en el Drawer de Oportunidad o en `/dashboard/playbook`.
* **Función:** El consultor ingresa la objeción del cliente (*"Ya tenemos un sistema y nos alcanza"*, *"El presupuesto excede lo previsto"*) y Gemini redacta la respuesta recomendada adaptada al rubro y tamaño de la empresa, basada en las directrices del Playbook (§8).
* **Endpoint propuesto:** `POST /api/ai/objection`

---

## 🟢 Prioridad Futura — Fase 3 (Diferenciadores y Escala)

### 7. Scoring y Analítica Predictiva de Conversión
* **Función:** Estima la probabilidad de éxito de cierre (%) en base a variables históricas (rubro, decisor involucrado, velocidad de respuesta y ticket).
* **Requisito:** Base de datos con al menos 50-100 oportunidades históricas cerradas.

### 8. Chatbot de Relevamiento Preliminar en Landing Web
* **Función:** Widget interactivo en la landing page donde el visitante describe sus procesos; Gemini clasifica el caso, genera una calificación previa y crea automáticamente la Empresa/Oportunidad en el CRM.

---

## 🛠️ Arquitectura Técnica y Requerimientos

```
┌────────────────────────────────────────────────────────┐
│                   CRM Frontend (Next.js)               │
└───────────────────────────┬────────────────────────────┘
                            │ fetch()
┌───────────────────────────▼────────────────────────────┐
│              Next.js API Routes (/api/ai/*)            │
│         - Validación de sesión (Auth JWT)              │
│         - Obtención de contexto desde Prisma (Postgres)│
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│               Servicio Central (src/lib/gemini.ts)     │
│         - SDK oficial @google/genai                    │
│         - System Prompt con metodología SinapsIA       │
│         - Manejo de Schemas JSON estructurados         │
└───────────────────────────┬────────────────────────────┘
                            │ HTTPS
┌───────────────────────────▼────────────────────────────┐
│                 Google Gemini API                      │
│            Modelo recomendado: gemini-2.5-flash        │
└────────────────────────────────────────────────────────┘
```

### Variables de Entorno Necesarias:
```env
GEMINI_API_KEY="AIzaSy..."
```

### Costos y Desempeño:
- **Modelo:** `gemini-2.5-flash` (alta velocidad de respuesta 1-2s, costo insignificante por token).
- **Consumo estimado:** Menos de $1 USD mensual para operaciones comerciales de equipo estándar.
