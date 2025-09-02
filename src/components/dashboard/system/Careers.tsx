import { Users, Plus, MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const jobPostings = [
  {
    id: 1,
    title: "Personal Trainer",
    department: "Fitness",
    location: "Main Branch",
    type: "Full-time",
    salary: "$45,000 - $55,000",
    applications: 12,
    status: "Active",
    posted: "2024-01-10"
  },
  {
    id: 2,
    title: "Front Desk Receptionist",
    department: "Administration",
    location: "Downtown Branch",
    type: "Part-time",
    salary: "$15 - $18/hour",
    applications: 8,
    status: "Active",
    posted: "2024-01-08"
  },
  {
    id: 3,
    title: "Fitness Manager",
    department: "Management",
    location: "All Locations",
    type: "Full-time",
    salary: "$60,000 - $70,000",
    applications: 5,
    status: "Closed",
    posted: "2024-01-05"
  }
];

export function Careers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Careers Management</h2>
          <p className="text-muted-foreground">
            Manage job postings and recruitment for your gym
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <div className="grid gap-6">
        {jobPostings.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.department}</CardDescription>
                </div>
                <Badge variant={job.status === "Active" ? "default" : "secondary"}>
                  {job.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.applications} applications</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Posted: {job.posted}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Applications</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}