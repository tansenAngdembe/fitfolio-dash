import { useState } from "react";
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  Edit, 
  Trash2, 
  Calendar,
  Users,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const trainers = [
  {
    id: "TR001",
    name: "Sarah Johnson",
    email: "sarah.johnson@gym.com",
    phone: "+1 (555) 123-4567",
    specialization: "Strength Training",
    certification: "NASM-CPT, CSCS",
    experience: "5 years",
    status: "Active",
    rating: 4.9,
    clientsCount: 25,
    availability: "Mon-Fri 6AM-8PM",
    hourlyRate: "$75",
    joinDate: "2019-03-15",
    bio: "Certified personal trainer specializing in strength training and functional fitness."
  },
  {
    id: "TR002",
    name: "Mike Chen",
    email: "mike.chen@gym.com",
    phone: "+1 (555) 987-6543",
    specialization: "Yoga & Pilates",
    certification: "RYT-500, PMA-CPT",
    experience: "8 years",
    status: "Active",
    rating: 4.8,
    clientsCount: 30,
    availability: "Tue-Sat 7AM-9PM",
    hourlyRate: "$65",
    joinDate: "2016-08-22",
    bio: "Experienced yoga instructor with expertise in various yoga styles and Pilates."
  },
  {
    id: "TR003",
    name: "Jessica Martinez",
    email: "jessica.martinez@gym.com",
    phone: "+1 (555) 456-7890",
    specialization: "HIIT & Cardio",
    certification: "ACSM-CPT, TRX-STC",
    experience: "4 years",
    status: "Active",
    rating: 4.7,
    clientsCount: 20,
    availability: "Mon-Thu 5AM-7PM",
    hourlyRate: "$70",
    joinDate: "2020-01-10",
    bio: "High-energy trainer specializing in HIIT workouts and cardiovascular conditioning."
  },
  {
    id: "TR004",
    name: "David Wilson",
    email: "david.wilson@gym.com",
    phone: "+1 (555) 321-0987",
    specialization: "Bodybuilding",
    certification: "IFBB Pro, NASM-CPT",
    experience: "12 years",
    status: "Active",
    rating: 4.9,
    clientsCount: 15,
    availability: "Mon-Fri 4PM-10PM",
    hourlyRate: "$90",
    joinDate: "2012-05-18",
    bio: "Professional bodybuilder and trainer with extensive competition experience."
  },
  {
    id: "TR005",
    name: "Emma Thompson",
    email: "emma.thompson@gym.com",
    phone: "+1 (555) 654-3210",
    specialization: "Nutrition & Wellness",
    certification: "RD, NASM-CPT",
    experience: "6 years",
    status: "On Leave",
    rating: 4.6,
    clientsCount: 18,
    availability: "Currently Unavailable",
    hourlyRate: "$80",
    joinDate: "2018-09-12",
    bio: "Registered dietitian and trainer focusing on holistic health and nutrition."
  }
];

export function TrainerManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrainers = trainers.filter(trainer =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusColors = {
      "Active": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "On Leave": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      "Inactive": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    };
    return statusColors[status as keyof typeof statusColors] || statusColors["Active"];
  };

  const getSpecializationBadge = (specialization: string) => {
    const specializationColors = {
      "Strength Training": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      "Yoga & Pilates": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      "HIIT & Cardio": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      "Bodybuilding": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
      "Nutrition & Wellness": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    };
    return specializationColors[specialization as keyof typeof specializationColors] || specializationColors["Strength Training"];
  };

  const getRatingBadge = (rating: number) => {
    if (rating >= 4.5) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    if (rating >= 4.0) return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    if (rating >= 3.5) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Trainer Management</h2>
          <p className="text-muted-foreground">
            Manage personal trainers, their schedules, specializations, and client assignments
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Trainer
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search trainers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
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
                  <TableHead>Trainer ID</TableHead>
                  <TableHead>Name & Contact</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Clients</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTrainers.map((trainer) => (
                  <TableRow key={trainer.id}>
                    <TableCell className="font-medium">{trainer.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{trainer.name}</div>
                        <div className="text-sm text-muted-foreground">{trainer.email}</div>
                        <div className="text-sm text-muted-foreground">{trainer.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getSpecializationBadge(trainer.specialization)}>
                        {trainer.specialization}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(trainer.status)}>
                        {trainer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Badge className={getRatingBadge(trainer.rating)}>
                          {trainer.rating}
                        </Badge>
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{trainer.clientsCount}</TableCell>
                    <TableCell className="text-sm">{trainer.experience}</TableCell>
                    <TableCell className="font-medium">{trainer.hourlyRate}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Trainer
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            View Schedule
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            Assign Clients
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Deactivate
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