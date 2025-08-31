import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, MoreHorizontal, UserPlus, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const members = [
  {
    id: "M001",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    plan: "Premium",
    status: "Active",
    joinDate: "2024-01-15",
    lastVisit: "2024-03-10",
    totalVisits: 45
  },
  {
    id: "M002", 
    name: "Mike Chen",
    email: "mike.chen@email.com",
    phone: "+1 (555) 234-5678",
    plan: "Basic",
    status: "Active",
    joinDate: "2024-02-01",
    lastVisit: "2024-03-09",
    totalVisits: 32
  },
  {
    id: "M003",
    name: "Emily Davis",
    email: "emily.d@email.com", 
    phone: "+1 (555) 345-6789",
    plan: "Standard",
    status: "Inactive",
    joinDate: "2023-11-20",
    lastVisit: "2024-02-28",
    totalVisits: 78
  },
  {
    id: "M004",
    name: "Alex Rodriguez",
    email: "alex.r@email.com",
    phone: "+1 (555) 456-7890",
    plan: "Premium",
    status: "Active",
    joinDate: "2024-01-08",
    lastVisit: "2024-03-11",
    totalVisits: 52
  },
  {
    id: "M005",
    name: "Jessica Wilson",
    email: "jessica.w@email.com",
    phone: "+1 (555) 567-8901",
    plan: "Basic",
    status: "Suspended",
    joinDate: "2023-12-05",
    lastVisit: "2024-02-15",
    totalVisits: 23
  }
];

export function MembersManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
      case "Inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      case "Suspended":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Suspended</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "Premium":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Premium</Badge>;
      case "Standard":
        return <Badge className="bg-info/10 text-info border-info/20">Standard</Badge>;
      case "Basic":
        return <Badge variant="outline">Basic</Badge>;
      default:
        return <Badge variant="outline">{plan}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Members Management</h2>
          <p className="text-muted-foreground">
            Manage gym members, subscriptions, and access control
          </p>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Add Member
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Members</CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Total Visits</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{member.phone}</TableCell>
                    <TableCell>{getPlanBadge(member.plan)}</TableCell>
                    <TableCell>{getStatusBadge(member.status)}</TableCell>
                    <TableCell>{member.joinDate}</TableCell>
                    <TableCell>{member.lastVisit}</TableCell>
                    <TableCell className="text-center">{member.totalVisits}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Member</DropdownMenuItem>
                          <DropdownMenuItem>Suspend</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Delete Member
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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