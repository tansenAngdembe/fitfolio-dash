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
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Plus, MoreHorizontal, Building2, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const vendors = [
  {
    id: "V001",
    name: "FitEquip Solutions",
    contact: "John Smith",
    email: "john@fitequip.com",
    phone: "+1 (555) 123-0001",
    category: "Equipment",
    status: "Active",
    contractStart: "2024-01-01",
    contractEnd: "2024-12-31",
    totalOrders: 12,
    lastOrder: "2024-03-05"
  },
  {
    id: "V002",
    name: "Nutrition Plus",
    contact: "Maria Garcia",
    email: "maria@nutritionplus.com", 
    phone: "+1 (555) 123-0002",
    category: "Supplements",
    status: "Active",
    contractStart: "2023-06-15",
    contractEnd: "2024-06-14",
    totalOrders: 28,
    lastOrder: "2024-03-08"
  },
  {
    id: "V003",
    name: "CleanFit Services",
    contact: "David Wilson",
    email: "david@cleanfit.com",
    phone: "+1 (555) 123-0003", 
    category: "Cleaning",
    status: "Active",
    contractStart: "2024-02-01",
    contractEnd: "2025-01-31",
    totalOrders: 6,
    lastOrder: "2024-03-10"
  },
  {
    id: "V004",
    name: "TechGym Systems",
    contact: "Sarah Johnson",
    email: "sarah@techgym.com",
    phone: "+1 (555) 123-0004",
    category: "Technology",
    status: "Pending",
    contractStart: "2024-03-15",
    contractEnd: "2025-03-14",
    totalOrders: 0,
    lastOrder: "N/A"
  },
  {
    id: "V005",
    name: "Security First",
    contact: "Mike Brown",
    email: "mike@securityfirst.com",
    phone: "+1 (555) 123-0005",
    category: "Security",
    status: "Inactive",
    contractStart: "2023-01-01",
    contractEnd: "2023-12-31",
    totalOrders: 4,
    lastOrder: "2023-11-20"
  }
];

interface VendorsManagementProps {
  onAddVendor: () => void;
}

export function VendorsManagement({ onAddVendor }: VendorsManagementProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVendors = filteredVendors.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
      case "Pending":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
      case "Inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Equipment":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Equipment</Badge>;
      case "Supplements":
        return <Badge className="bg-info/10 text-info border-info/20">Supplements</Badge>;
      case "Technology":
        return <Badge className="bg-accent/10 text-accent border-accent/20">Technology</Badge>;
      case "Cleaning":
        return <Badge variant="outline">Cleaning</Badge>;
      case "Security":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Security</Badge>;
      default:
        return <Badge variant="outline">{category}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Vendors Management</h2>
          <p className="text-muted-foreground">
            Manage vendor relationships, contracts, and procurement
          </p>
        </div>
        <Button className="gap-2" onClick={onAddVendor}>
          <Building2 className="h-4 w-4" />
          Add Vendor
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Vendors</CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search vendors..."
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
                  <TableHead>Vendor ID</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Contact Person</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Contract Period</TableHead>
                  <TableHead>Total Orders</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedVendors.map((vendor) => (
                  <TableRow key={vendor.id}>
                    <TableCell className="font-medium">{vendor.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{vendor.name}</div>
                        <div className="text-sm text-muted-foreground">{vendor.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{vendor.contact}</div>
                        <div className="text-sm text-muted-foreground">{vendor.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getCategoryBadge(vendor.category)}</TableCell>
                    <TableCell>{getStatusBadge(vendor.status)}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{vendor.contractStart}</div>
                        <div className="text-muted-foreground">to {vendor.contractEnd}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{vendor.totalOrders}</TableCell>
                    <TableCell>{vendor.lastOrder}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Vendor</DropdownMenuItem>
                          <DropdownMenuItem>View Orders</DropdownMenuItem>
                          <DropdownMenuItem>Renew Contract</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Terminate Contract
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {totalPages > 1 && (
            <div className="mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}