import { Database, Server, HardDrive, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export function DatabaseConfig() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Database Configuration</h2>
        <p className="text-muted-foreground">
          Manage database settings, connections, and backup configurations
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Connection Settings
            </CardTitle>
            <CardDescription>
              Configure database connection parameters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="host">Database Host</Label>
                <Input id="host" defaultValue="localhost" />
              </div>
              <div>
                <Label htmlFor="port">Port</Label>
                <Input id="port" defaultValue="5432" />
              </div>
              <div>
                <Label htmlFor="database">Database Name</Label>
                <Input id="database" defaultValue="gym_management" />
              </div>
              <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="admin" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Connection Status</span>
              <Badge className="bg-green-100 text-green-800">Connected</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-5 w-5" />
              Backup Configuration
            </CardTitle>
            <CardDescription>
              Automated backup settings and schedules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-backup">Automatic Backups</Label>
                <p className="text-sm text-muted-foreground">Enable scheduled database backups</p>
              </div>
              <Switch id="auto-backup" defaultChecked />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="backup-frequency">Backup Frequency</Label>
                <Input id="backup-frequency" defaultValue="Daily" />
              </div>
              <div>
                <Label htmlFor="backup-time">Backup Time</Label>
                <Input id="backup-time" defaultValue="02:00 AM" />
              </div>
            </div>
            <div>
              <Label htmlFor="backup-location">Backup Location</Label>
              <Input id="backup-location" defaultValue="/backups/gym_db" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Database security and access controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="ssl-enabled">SSL Encryption</Label>
                <p className="text-sm text-muted-foreground">Enable SSL for database connections</p>
              </div>
              <Switch id="ssl-enabled" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="query-logging">Query Logging</Label>
                <p className="text-sm text-muted-foreground">Log all database queries for auditing</p>
              </div>
              <Switch id="query-logging" />
            </div>
            <div>
              <Label htmlFor="max-connections">Maximum Connections</Label>
              <Input id="max-connections" defaultValue="100" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Performance Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98.5%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">45ms</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">156</div>
                <div className="text-sm text-muted-foreground">Active Connections</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Test Connection</Button>
          <Button>Save Configuration</Button>
        </div>
      </div>
    </div>
  );
}