import { Mail, Settings, Shield, Send, TestTube } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function EmailSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Email Settings</h2>
        <p className="text-muted-foreground">
          Configure SMTP settings and email preferences for your gym system
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              SMTP Configuration
            </CardTitle>
            <CardDescription>
              Configure outgoing email server settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input id="smtp-host" defaultValue="smtp.gmail.com" />
              </div>
              <div>
                <Label htmlFor="smtp-port">Port</Label>
                <Input id="smtp-port" defaultValue="587" />
              </div>
              <div>
                <Label htmlFor="smtp-username">Username</Label>
                <Input id="smtp-username" defaultValue="admin@fitzonegym.com" />
              </div>
              <div>
                <Label htmlFor="smtp-password">Password</Label>
                <Input id="smtp-password" type="password" defaultValue="••••••••" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="smtp-tls">Enable TLS/SSL</Label>
                <p className="text-sm text-muted-foreground">Use secure connection for email sending</p>
              </div>
              <Switch id="smtp-tls" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Preferences
            </CardTitle>
            <CardDescription>
              Configure default email settings and templates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="from-name">From Name</Label>
                <Input id="from-name" defaultValue="FitZone Gym" />
              </div>
              <div>
                <Label htmlFor="from-email">From Email</Label>
                <Input id="from-email" defaultValue="noreply@fitzonegym.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="reply-to">Reply-To Email</Label>
              <Input id="reply-to" defaultValue="support@fitzonegym.com" />
            </div>
            <div>
              <Label htmlFor="email-signature">Email Signature</Label>
              <Input id="email-signature" defaultValue="Best regards, FitZone Gym Team" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Notification Settings
            </CardTitle>
            <CardDescription>
              Configure automatic email notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="welcome-emails">Welcome Emails</Label>
                <p className="text-sm text-muted-foreground">Send welcome email to new members</p>
              </div>
              <Switch id="welcome-emails" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="payment-confirmations">Payment Confirmations</Label>
                <p className="text-sm text-muted-foreground">Send payment receipt emails</p>
              </div>
              <Switch id="payment-confirmations" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="membership-reminders">Membership Reminders</Label>
                <p className="text-sm text-muted-foreground">Send membership expiry reminders</p>
              </div>
              <Switch id="membership-reminders" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="class-notifications">Class Notifications</Label>
                <p className="text-sm text-muted-foreground">Send class booking confirmations</p>
              </div>
              <Switch id="class-notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5" />
              Email Testing
            </CardTitle>
            <CardDescription>
              Test your email configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="test-email">Test Email Address</Label>
              <Input id="test-email" placeholder="test@example.com" />
            </div>
            <div>
              <Label htmlFor="test-template">Template to Test</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="welcome">Welcome Email</SelectItem>
                  <SelectItem value="payment">Payment Confirmation</SelectItem>
                  <SelectItem value="reminder">Membership Reminder</SelectItem>
                  <SelectItem value="class">Class Notification</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="w-full">
              <TestTube className="mr-2 h-4 w-4" />
              Send Test Email
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Test Configuration</Button>
          <Button>Save Settings</Button>
        </div>
      </div>
    </div>
  );
}