import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { MembersManagement } from "@/components/dashboard/MembersManagement";
import { VendorsManagement } from "@/components/dashboard/VendorsManagement";
import { AdminsManagement } from "@/components/dashboard/AdminsManagement";
import { EquipmentManagement } from "@/components/dashboard/EquipmentManagement";
import { ClassesManagement } from "@/components/dashboard/ClassesManagement";
import { Analytics } from "@/components/dashboard/Analytics";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

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
      case "settings":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
              <p className="text-muted-foreground">System configuration and preferences</p>
            </div>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Settings panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout 
      activeSection={activeSection} 
      onSectionChange={setActiveSection}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default Index;
