import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { MembersManagement } from "@/components/dashboard/MembersManagement";
import { VendorsManagement } from "@/components/dashboard/VendorsManagement";
import { AdminsManagement } from "@/components/dashboard/AdminsManagement";
import { TrainerManagement } from "@/components/dashboard/TrainerManagement";
import { Analytics } from "@/components/dashboard/Analytics";
import { Settings } from "@/components/dashboard/Settings";
import { SystemConfiguration } from "@/components/dashboard/SystemConfiguration";
import { HtmlTemplates } from "@/components/dashboard/system/HtmlTemplates";
import { Careers } from "@/components/dashboard/system/Careers";
import { About } from "@/components/dashboard/system/About";
import { DatabaseConfig } from "@/components/dashboard/system/DatabaseConfig";
import { EmailSettings } from "@/components/dashboard/system/EmailSettings";
import { SecuritySettings } from "@/components/dashboard/system/SecuritySettings";
import { LoginForm } from "@/components/auth/LoginForm";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  const handleLogin = (credentials: { email: string; password: string }) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection("dashboard");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />;
      case "members":
        return <MembersManagement />;
      case "vendors":
        return <VendorsManagement />;
      case "admins":
        return <AdminsManagement />;
      case "trainers":
        return <TrainerManagement />;
      case "analytics":
        return <Analytics />;
      case "system":
        return <SystemConfiguration onNavigate={setActiveSection} />;
      case "system-html-templates":
        return <HtmlTemplates />;
      case "system-careers":
        return <Careers />;
      case "system-about":
        return <About />;
      case "system-database-config":
        return <DatabaseConfig />;
      case "system-email-settings":
        return <EmailSettings />;
      case "system-security":
        return <SecuritySettings />;
      case "settings":
        return <Settings />;
      case "profile":
      case "account":
      case "notifications":
      case "appearance":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight capitalize">{activeSection}</h2>
              <p className="text-muted-foreground">
                {activeSection === "profile" && "Manage your profile information"}
                {activeSection === "account" && "Account security and authentication settings"}
                {activeSection === "notifications" && "Configure notification preferences"}
                {activeSection === "appearance" && "Customize the dashboard appearance"}
              </p>
            </div>
            <div className="text-center py-12">
              <p className="text-muted-foreground">{activeSection} panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <DashboardLayout 
      activeSection={activeSection} 
      onSectionChange={setActiveSection}
      onLogout={handleLogout}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default Index;
