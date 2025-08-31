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
import { Search, Plus, MoreHorizontal, Dumbbell, Filter, Wrench } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const equipment = [
  {
    id: "E001",
    name: "Treadmill Pro X1",
    category: "Cardio",
    brand: "FitTech",
    model: "TX1-2024",
    status: "Active",
    condition: "Excellent",
    location: "Cardio Zone A",
    purchaseDate: "2024-01-15",
    warrantyExpiry: "2026-01-15",
    lastMaintenance: "2024-02-15",
    nextMaintenance: "2024-05-15",
    usageHours: 245
  },
  {
    id: "E002",
    name: "Bench Press Station",
    category: "Strength",
    brand: "IronMax",
    model: "BP-500",
    status: "Maintenance",
    condition: "Good",
    location: "Weight Training Area",
    purchaseDate: "2023-08-20",
    warrantyExpiry: "2025-08-20",
    lastMaintenance: "2024-03-01",
    nextMaintenance: "2024-03-15",
    usageHours: 1200
  },
  {
    id: "E003",
    name: "Rowing Machine Elite",
    category: "Cardio",
    brand: "RowTech",
    model: "RE-2023",
    status: "Active",
    condition: "Good",
    location: "Cardio Zone B",
    purchaseDate: "2023-11-10",
    warrantyExpiry: "2025-11-10",
    lastMaintenance: "2024-01-20",
    nextMaintenance: "2024-04-20",
    usageHours: 380
  },
  {
    id: "E004",
    name: "Elliptical Cross Trainer",
    category: "Cardio",
    brand: "FitTech",
    model: "EC-2024",
    status: "Out of Order",
    condition: "Needs Repair",
    location: "Cardio Zone A",
    purchaseDate: "2024-02-01",
    warrantyExpiry: "2026-02-01",
    lastMaintenance: "2024-02-28",
    nextMaintenance: "TBD",
    usageHours: 156
  },
  {
    id: "E005",
    name: "Cable Machine System",
    category: "Strength",
    brand: "FlexFit",
    model: "CMS-Pro",
    status: "Active",
    condition: "Excellent",
    location: "Functional Training",
    purchaseDate: "2023-12-05",
    warrantyExpiry: "2025-12-05",
    lastMaintenance: "2024-02-10",
    nextMaintenance: "2024-05-10",
    usageHours: 890
  }
];

export function EquipmentManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEquipment = equipment.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
      case "Maintenance":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Maintenance</Badge>;
      case "Out of Order":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Out of Order</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getConditionBadge = (condition: string) => {
    switch (condition) {
      case "Excellent":
        return <Badge className="bg-success/10 text-success border-success/20">Excellent</Badge>;
      case "Good":
        return <Badge className="bg-info/10 text-info border-info/20">Good</Badge>;
      case "Fair":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Fair</Badge>;
      case "Needs Repair":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Needs Repair</Badge>;
      default:
        return <Badge variant="outline">{condition}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Cardio":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Cardio</Badge>;
      case "Strength":
        return <Badge className="bg-accent/10 text-accent border-accent/20">Strength</Badge>;
      default:
        return <Badge variant="outline">{category}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Equipment Management</h2>
          <p className="text-muted-foreground">
            Manage gym equipment, maintenance schedules, and asset tracking
          </p>
        </div>
        <Button className="gap-2">
          <Dumbbell className="h-4 w-4" />
          Add Equipment
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Equipment Inventory
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search equipment..."
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
                  <TableHead>Equipment ID</TableHead>
                  <TableHead>Name & Details</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Maintenance</TableHead>
                  <TableHead>Usage Hours</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEquipment.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.brand} - {item.model}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getCategoryBadge(item.category)}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell>{getConditionBadge(item.condition)}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>Last: {item.lastMaintenance}</div>
                        <div className="text-muted-foreground">Next: {item.nextMaintenance}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{item.usageHours}h</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Equipment</DropdownMenuItem>
                          <DropdownMenuItem>Schedule Maintenance</DropdownMenuItem>
                          <DropdownMenuItem>View History</DropdownMenuItem>
                          <DropdownMenuItem>Move Location</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Retire Equipment
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