import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  UserCheck, 
  Dumbbell, 
  Calendar, 
  TrendingUp,
  Settings,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "members", name: "Members", icon: Users },
  { id: "vendors", name: "Vendors", icon: Building2 },
  { id: "admins", name: "Admins", icon: UserCheck },
  { id: "equipment", name: "Equipment", icon: Dumbbell },
  { id: "classes", name: "Classes", icon: Calendar },
  { id: "analytics", name: "Analytics", icon: TrendingUp },
  { id: "settings", name: "Settings", icon: Settings },
];

export function DashboardLayout({ children, activeSection, onSectionChange }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-foreground/20 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GymAdmin Pro
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3 h-11",
                      activeSection === item.id && "bg-primary text-primary-foreground shadow-sm"
                    )}
                    onClick={() => {
                      onSectionChange(item.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="flex items-center justify-between h-16 px-6 bg-card border-b">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <UserCheck className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">Admin User</span>
            </div>
          </div>
        </div>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}