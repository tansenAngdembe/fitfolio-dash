import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Calendar, Target, Activity } from "lucide-react";

const revenueData = [
  { month: "January", revenue: 45230, members: 285, growth: "+12%" },
  { month: "February", revenue: 48532, members: 298, growth: "+18%" },
  { month: "March", revenue: 52100, members: 312, growth: "+15%" },
];

const topClasses = [
  { name: "HIIT Bootcamp", bookings: 156, revenue: 4680, rating: 4.8 },
  { name: "Morning Yoga", bookings: 134, revenue: 3350, rating: 4.9 },
  { name: "Strength Training", bookings: 89, revenue: 3115, rating: 4.7 },
  { name: "Pilates Core", bookings: 76, revenue: 2128, rating: 4.6 },
];

const membershipStats = [
  { plan: "Premium", count: 145, revenue: 21750, percentage: 51 },
  { plan: "Standard", count: 98, revenue: 14700, percentage: 34 },
  { plan: "Basic", count: 42, revenue: 4200, percentage: 15 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics & Reports</h2>
        <p className="text-muted-foreground">
          Detailed insights into gym performance, revenue, and member engagement
        </p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$145,862</div>
            <p className="text-xs text-success">+20.1% from last quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-success">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-success">+8.3% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.5%</div>
            <p className="text-xs text-success">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Revenue Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Monthly Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Members</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {revenueData.map((data) => (
                    <TableRow key={data.month}>
                      <TableCell className="font-medium">{data.month}</TableCell>
                      <TableCell>${data.revenue.toLocaleString()}</TableCell>
                      <TableCell>{data.members}</TableCell>
                      <TableCell>
                        <Badge className="bg-success/10 text-success border-success/20">
                          {data.growth}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Membership Plans Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Membership Plans Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {membershipStats.map((plan) => (
                <div key={plan.plan} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{plan.plan}</p>
                    <p className="text-xs text-muted-foreground">{plan.count} members</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">${plan.revenue.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{plan.percentage}% of total</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Classes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Top Performing Classes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class Name</TableHead>
                  <TableHead>Total Bookings</TableHead>
                  <TableHead>Revenue Generated</TableHead>
                  <TableHead>Average Rating</TableHead>
                  <TableHead>Performance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topClasses.map((classData, index) => (
                  <TableRow key={classData.name}>
                    <TableCell className="font-medium">{classData.name}</TableCell>
                    <TableCell>{classData.bookings}</TableCell>
                    <TableCell>${classData.revenue.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span>{classData.rating}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        index === 0 ? "bg-primary/10 text-primary border-primary/20" :
                        index === 1 ? "bg-success/10 text-success border-success/20" :
                        "bg-info/10 text-info border-info/20"
                      }>
                        {index === 0 ? "Excellent" : index === 1 ? "Very Good" : "Good"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}