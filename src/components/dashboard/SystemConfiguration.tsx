import { 
  Code, 
  Users, 
  Info, 
  Database, 
  Mail, 
  Shield, 
  FileText, 
  Settings, 
  Calendar,
  CreditCard,
  Globe,
  Smartphone
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const systemItems = [
  {
    id: "html-templates",
    title: "HTML Templates",
    description: "Manage email templates and notification layouts",
    icon: Code,
    color: "text-blue-600"
  },
  {
    id: "careers",
    title: "Careers",
    description: "Job postings and recruitment management",
    icon: Users,
    color: "text-green-600"
  },
  {
    id: "about",
    title: "About",
    description: "Company information and team details",
    icon: Info,
    color: "text-purple-600"
  },
  {
    id: "database-config",
    title: "Database Configuration",
    description: "Database settings and backup configurations",
    icon: Database,
    color: "text-red-600"
  },
  {
    id: "email-settings",
    title: "Email Settings",
    description: "SMTP configuration and email preferences",
    icon: Mail,
    color: "text-orange-600"
  },
  {
    id: "security",
    title: "Security Settings",
    description: "Security policies and access controls",
    icon: Shield,
    color: "text-indigo-600"
  },
  {
    id: "reports",
    title: "Report Templates",
    description: "Custom report formats and layouts",
    icon: FileText,
    color: "text-gray-600"
  },
  {
    id: "system-settings",
    title: "System Settings",
    description: "General system configuration and preferences",
    icon: Settings,
    color: "text-slate-600"
  },
  {
    id: "maintenance",
    title: "Maintenance Schedule",
    description: "System maintenance and downtime planning",
    icon: Calendar,
    color: "text-yellow-600"
  },
  {
    id: "billing",
    title: "Billing Configuration",
    description: "Payment gateways and billing settings",
    icon: CreditCard,
    color: "text-emerald-600"
  },
  {
    id: "website-config",
    title: "Website Configuration",
    description: "Frontend settings and website management",
    icon: Globe,
    color: "text-cyan-600"
  },
  {
    id: "mobile-app",
    title: "Mobile App Settings",
    description: "Mobile application configuration and APIs",
    icon: Smartphone,
    color: "text-pink-600"
  }
];

export function SystemConfiguration() {
  const handleItemClick = (itemId: string) => {
    console.log(`Opening ${itemId} configuration`);
    // Handle navigation to specific configuration page
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">System Configuration</h2>
        <p className="text-muted-foreground">
          Manage system settings, templates, and configurations for your gym management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systemItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-background border ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {item.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => handleItemClick(item.id)}
                >
                  Configure
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions Section */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common system management tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-12">
              <Database className="mr-2 h-4 w-4" />
              Backup Database
            </Button>
            <Button variant="outline" className="h-12">
              <Settings className="mr-2 h-4 w-4" />
              System Health Check
            </Button>
            <Button variant="outline" className="h-12">
              <Shield className="mr-2 h-4 w-4" />
              Security Audit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}