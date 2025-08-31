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
import { Search, Plus, MoreHorizontal, UserCheck, Filter, Shield } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const admins = [
  {
    id: "A001",
    name: "Robert Johnson",
    email: "robert.j@gymadmin.com",
    phone: "+1 (555) 100-0001",
    role: "Super Admin",
    department: "Management",
    status: "Active",
    lastLogin: "2024-03-11 09:30",
    joinDate: "2023-05-15",
    permissions: ["Full Access", "User Management", "Financial"]
  },
  {
    id: "A002",
    name: "Lisa Anderson",
    email: "lisa.a@gymadmin.com",
    phone: "+1 (555) 100-0002",
    role: "Admin",
    department: "Operations",
    status: "Active",
    lastLogin: "2024-03-11 14:45",
    joinDate: "2023-08-20",
    permissions: ["User Management", "Equipment", "Classes"]
  },
  {
    id: "A003",
    name: "Michael Davis",
    email: "michael.d@gymadmin.com",
    phone: "+1 (555) 100-0003",
    role: "Moderator",
    department: "Customer Service",
    status: "Active",
    lastLogin: "2024-03-10 16:20",
    joinDate: "2023-11-10",
    permissions: ["User Support", "Basic Reports"]
  },
  {
    id: "A004",
    name: "Jennifer Wilson",
    email: "jennifer.w@gymadmin.com",
    phone: "+1 (555) 100-0004",
    role: "Admin",
    department: "Finance",
    status: "Inactive",
    lastLogin: "2024-02-28 11:15",
    joinDate: "2023-07-05",
    permissions: ["Financial", "Reports", "Analytics"]
  },
  {
    id: "A005",
    name: "Thomas Brown",
    email: "thomas.b@gymadmin.com",
    phone: "+1 (555) 100-0005",
    role: "Moderator",
    department: "Maintenance",
    status: "Suspended",
    lastLogin: "2024-03-01 08:45",
    joinDate: "2024-01-15",
    permissions: ["Equipment", "Maintenance Reports"]
  }
];

export function AdminsManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.id.toLowerCase().includes(searchTerm.toLowerCase())
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

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Super Admin":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Super Admin</Badge>;
      case "Admin":
        return <Badge className="bg-info/10 text-info border-info/20">Admin</Badge>;
      case "Moderator":
        return <Badge variant="outline">Moderator</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Management</h2>
          <p className="text-muted-foreground">
            Manage administrative users, roles, and system permissions
          </p>
        </div>
        <Button className="gap-2">
          <UserCheck className="h-4 w-4" />
          Add Admin
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            All Administrators
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search admins..."
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
                  <TableHead>Admin ID</TableHead>
                  <TableHead>Name & Contact</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAdmins.map((admin) => (
                  <TableRow key={admin.id}>
                    <TableCell className="font-medium">{admin.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{admin.name}</div>
                        <div className="text-sm text-muted-foreground">{admin.email}</div>
                        <div className="text-sm text-muted-foreground">{admin.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getRoleBadge(admin.role)}</TableCell>
                    <TableCell>{admin.department}</TableCell>
                    <TableCell>{getStatusBadge(admin.status)}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {admin.lastLogin}
                      </div>
                    </TableCell>
                    <TableCell>{admin.joinDate}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {admin.permissions.slice(0, 2).map((permission, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                        {admin.permissions.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{admin.permissions.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Admin</DropdownMenuItem>
                          <DropdownMenuItem>Manage Permissions</DropdownMenuItem>
                          <DropdownMenuItem>Reset Password</DropdownMenuItem>
                          <DropdownMenuItem>View Activity Log</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Suspend Admin
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