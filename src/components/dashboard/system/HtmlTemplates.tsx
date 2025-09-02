import { Code, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    id: 1,
    name: "Welcome Email",
    description: "Email template for new member registration",
    type: "Email",
    status: "Active",
    lastModified: "2024-01-15"
  },
  {
    id: 2,
    name: "Payment Receipt",
    description: "Template for payment confirmation emails",
    type: "Email",
    status: "Active",
    lastModified: "2024-01-10"
  },
  {
    id: 3,
    name: "Class Reminder",
    description: "Notification template for upcoming classes",
    type: "Notification",
    status: "Draft",
    lastModified: "2024-01-08"
  },
  {
    id: 4,
    name: "Membership Expiry",
    description: "Alert template for expiring memberships",
    type: "Email",
    status: "Active",
    lastModified: "2024-01-05"
  }
];

export function HtmlTemplates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">HTML Templates</h2>
          <p className="text-muted-foreground">
            Manage email templates and notification layouts for your gym system
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Template
        </Button>
      </div>

      <div className="grid gap-6">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </div>
                </div>
                <Badge variant={template.status === "Active" ? "default" : "secondary"}>
                  {template.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Type:</span> {template.type} | 
                  <span className="font-medium ml-2">Last Modified:</span> {template.lastModified}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}