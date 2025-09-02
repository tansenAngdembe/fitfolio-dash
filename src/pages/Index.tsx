import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { MembersManagement } from "@/components/dashboard/MembersManagement";
import { VendorsManagement } from "@/components/dashboard/VendorsManagement";
import { AdminsManagement } from "@/components/dashboard/AdminsManagement";
import { EquipmentManagement } from "@/components/dashboard/EquipmentManagement";
import { ClassesManagement } from "@/components/dashboard/ClassesManagement";
import { Analytics } from "@/components/dashboard/Analytics";
import { Settings } from "@/components/dashboard/Settings";
import { SystemConfiguration } from "@/components/dashboard/SystemConfiguration";
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
      case "equipment":
        return <EquipmentManagement />;
      case "classes":
        return <ClassesManagement />;
      case "analytics":
        return <Analytics />;
      case "system":
        return <SystemConfiguration />;
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
