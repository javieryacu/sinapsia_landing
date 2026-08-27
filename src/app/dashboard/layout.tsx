import { getSession } from "@/lib/auth";
import { Sidebar } from "@/components/Sidebar";
import { OnboardingGuide } from "@/components/OnboardingGuide";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar user={{ name: session.name, email: session.email }} />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto min-h-screen md:h-screen">
        {children}
        <OnboardingGuide />
      </div>
    </div>
  );
}
