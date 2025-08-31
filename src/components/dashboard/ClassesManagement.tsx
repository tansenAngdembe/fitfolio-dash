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
import { Search, Plus, MoreHorizontal, Calendar, Filter, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const classes = [
  {
    id: "C001",
    name: "Morning Yoga Flow",
    instructor: "Sarah Johnson",
    category: "Yoga",
    duration: 60,
    capacity: 20,
    enrolled: 18,
    schedule: "Mon, Wed, Fri",
    time: "07:00 - 08:00",
    room: "Studio A",
    status: "Active",
    level: "Beginner",
    price: 25,
    startDate: "2024-01-01"
  },
  {
    id: "C002", 
    name: "HIIT Bootcamp",
    instructor: "Mike Chen",
    category: "HIIT",
    duration: 45,
    capacity: 15,
    enrolled: 15,
    schedule: "Tue, Thu",
    time: "18:30 - 19:15",
    room: "Main Floor",
    status: "Full",
    level: "Advanced",
    price: 30,
    startDate: "2024-02-01"
  },
  {
    id: "C003",
    name: "Pilates Core Strength",
    instructor: "Emily Davis",
    category: "Pilates", 
    duration: 50,
    capacity: 12,
    enrolled: 8,
    schedule: "Mon, Wed",
    time: "12:00 - 12:50",
    room: "Studio B",
    status: "Active",
    level: "Intermediate",
    price: 28,
    startDate: "2024-01-15"
  },
  {
    id: "C004",
    name: "Strength Training Basics",
    instructor: "Alex Rodriguez",
    category: "Strength",
    duration: 75,
    capacity: 10,
    enrolled: 6,
    schedule: "Sat",
    time: "10:00 - 11:15",
    room: "Weight Room",
    status: "Active",
    level: "Beginner",
    price: 35,
    startDate: "2024-02-10"
  },
  {
    id: "C005",
    name: "Spin Cycle Challenge",
    instructor: "Jessica Wilson",
    category: "Cycling",
    duration: 45,
    capacity: 20,
    enrolled: 0,
    schedule: "Daily",
    time: "19:00 - 19:45",
    room: "Cycle Studio",
    status: "Cancelled",
    level: "All Levels",
    price: 22,
    startDate: "2024-03-01"
  }
];

export function ClassesManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClasses = classes.filter(classItem =>
    classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
      case "Full":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Full</Badge>;
      case "Cancelled":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Cancelled</Badge>;
      case "Pending":
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Beginner":
        return <Badge className="bg-info/10 text-info border-info/20">Beginner</Badge>;
      case "Intermediate":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Intermediate</Badge>;
      case "Advanced":
        return <Badge className="bg-accent/10 text-accent border-accent/20">Advanced</Badge>;
      case "All Levels":
        return <Badge variant="outline">All Levels</Badge>;
      default:
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    const categoryStyles = {
      "Yoga": "bg-purple-100 text-purple-800 border-purple-200",
      "HIIT": "bg-red-100 text-red-800 border-red-200", 
      "Pilates": "bg-green-100 text-green-800 border-green-200",
      "Strength": "bg-blue-100 text-blue-800 border-blue-200",
      "Cycling": "bg-orange-100 text-orange-800 border-orange-200"
    };
    
    return (
      <Badge className={categoryStyles[category as keyof typeof categoryStyles] || "border"}>
        {category}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Classes Management</h2>
          <p className="text-muted-foreground">
            Manage fitness classes, schedules, instructors, and bookings
          </p>
        </div>
        <Button className="gap-2">
          <Calendar className="h-4 w-4" />
          Add Class
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Class Schedule
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search classes..."
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
                  <TableHead>Class ID</TableHead>
                  <TableHead>Class Name</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClasses.map((classItem) => (
                  <TableRow key={classItem.id}>
                    <TableCell className="font-medium">{classItem.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{classItem.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {classItem.duration} min • {classItem.room}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{classItem.instructor}</TableCell>
                    <TableCell>{getCategoryBadge(classItem.category)}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{classItem.schedule}</div>
                        <div className="text-muted-foreground">{classItem.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <span className={`font-medium ${
                          classItem.enrolled === classItem.capacity ? 'text-warning' : 'text-foreground'
                        }`}>
                          {classItem.enrolled}/{classItem.capacity}
                        </span>
                        <div className="text-muted-foreground">
                          {Math.round((classItem.enrolled / classItem.capacity) * 100)}% full
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(classItem.status)}</TableCell>
                    <TableCell>{getLevelBadge(classItem.level)}</TableCell>
                    <TableCell>${classItem.price}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Class</DropdownMenuItem>
                          <DropdownMenuItem>View Attendees</DropdownMenuItem>
                          <DropdownMenuItem>Change Schedule</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate Class</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Cancel Class
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