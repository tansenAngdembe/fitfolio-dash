import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Dumbbell, TrendingUp, Calendar, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Members",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Active Vendors",
    value: "23",
    change: "+2",
    icon: Building2,
    trend: "up"
  },
  {
    title: "Equipment Items",
    value: "156",
    change: "+8",
    icon: Dumbbell,
    trend: "up"
  },
  {
    title: "Monthly Revenue",
    value: "$48,532",
    change: "+18.2%",
    icon: DollarSign,
    trend: "up"
  },
  {
    title: "Active Classes",
    value: "42",
    change: "+5",
    icon: Calendar,
    trend: "up"
  },
  {
    title: "Growth Rate",
    value: "24.8%",
    change: "+4.3%",
    icon: TrendingUp,
    trend: "up"
  }
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Comprehensive gym management analytics and key metrics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-success">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Member Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah Johnson", email: "sarah.j@email.com", plan: "Premium", date: "2 hours ago" },
                { name: "Mike Chen", email: "mike.chen@email.com", plan: "Basic", date: "4 hours ago" },
                { name: "Emily Davis", email: "emily.d@email.com", plan: "Premium", date: "6 hours ago" },
                { name: "Alex Rodriguez", email: "alex.r@email.com", plan: "Standard", date: "8 hours ago" }
              ].map((member, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{member.plan}</p>
                    <p className="text-xs text-muted-foreground">{member.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Equipment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Treadmill #1", status: "Active", maintenance: "Next: Mar 15", condition: "excellent" },
                { name: "Bench Press #3", status: "Maintenance", maintenance: "Due: Today", condition: "needs-attention" },
                { name: "Rowing Machine #2", status: "Active", maintenance: "Next: Mar 22", condition: "good" },
                { name: "Elliptical #4", status: "Active", maintenance: "Next: Mar 18", condition: "excellent" }
              ].map((equipment, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{equipment.name}</p>
                    <p className="text-xs text-muted-foreground">{equipment.maintenance}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      equipment.status === "Active" 
                        ? "bg-success/10 text-success" 
                        : "bg-warning/10 text-warning"
                    }`}>
                      {equipment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}