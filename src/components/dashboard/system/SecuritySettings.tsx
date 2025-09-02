import { Shield, Key, Lock, Eye, AlertTriangle, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Security Settings</h2>
        <p className="text-muted-foreground">
          Configure security policies, access controls, and authentication settings
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Authentication Settings
            </CardTitle>
            <CardDescription>
              Configure login and authentication requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
              </div>
              <Switch id="two-factor" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="strong-passwords">Strong Password Policy</Label>
                <p className="text-sm text-muted-foreground">Enforce complex password requirements</p>
              </div>
              <Switch id="strong-passwords" defaultChecked />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" defaultValue="30" />
              </div>
              <div>
                <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                <Input id="max-login-attempts" defaultValue="5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Access Control
            </CardTitle>
            <CardDescription>
              Manage user roles and permissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className="font-medium">Super Admin</span>
                  <p className="text-sm text-muted-foreground">Full system access</p>
                </div>
                <Badge>3 users</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className="font-medium">Admin</span>
                  <p className="text-sm text-muted-foreground">Limited admin access</p>
                </div>
                <Badge>8 users</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className="font-medium">Staff</span>
                  <p className="text-sm text-muted-foreground">Basic operational access</p>
                </div>
                <Badge>15 users</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Audit & Monitoring
            </CardTitle>
            <CardDescription>
              Security monitoring and audit trail settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="audit-logging">Audit Logging</Label>
                <p className="text-sm text-muted-foreground">Log all user actions and system changes</p>
              </div>
              <Switch id="audit-logging" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="failed-login-alerts">Failed Login Alerts</Label>
                <p className="text-sm text-muted-foreground">Alert admins of suspicious login attempts</p>
              </div>
              <Switch id="failed-login-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="ip-restriction">IP Address Restrictions</Label>
                <p className="text-sm text-muted-foreground">Restrict admin access to specific IP ranges</p>
              </div>
              <Switch id="ip-restriction" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Data Protection
            </CardTitle>
            <CardDescription>
              Data encryption and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="data-encryption">Database Encryption</Label>
                <p className="text-sm text-muted-foreground">Encrypt sensitive data at rest</p>
              </div>
              <Switch id="data-encryption" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-backup-encryption">Backup Encryption</Label>
                <p className="text-sm text-muted-foreground">Encrypt database backups</p>
              </div>
              <Switch id="auto-backup-encryption" defaultChecked />
            </div>
            <div>
              <Label htmlFor="data-retention">Data Retention Period (days)</Label>
              <Input id="data-retention" defaultValue="365" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Security Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg border-yellow-200 bg-yellow-50">
                <div>
                  <span className="font-medium">Password Policy Update</span>
                  <p className="text-sm text-muted-foreground">Some users have weak passwords</p>
                </div>
                <Badge variant="secondary">Warning</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg border-green-200 bg-green-50">
                <div>
                  <span className="font-medium">Security Scan Complete</span>
                  <p className="text-sm text-muted-foreground">No vulnerabilities detected</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Success</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Run Security Scan</Button>
          <Button>Save Security Settings</Button>
        </div>
      </div>
    </div>
  );
}