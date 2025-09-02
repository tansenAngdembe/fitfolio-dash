import { Info, Building2, Users, Award, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function About() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">About Company</h2>
        <p className="text-muted-foreground">
          Manage company information, mission, and team details
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="FitZone Gym" />
              </div>
              <div>
                <Label htmlFor="founded">Founded Year</Label>
                <Input id="founded" defaultValue="2015" />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Company Description</Label>
              <Textarea 
                id="description" 
                defaultValue="FitZone Gym is a premier fitness facility dedicated to helping our members achieve their health and wellness goals through state-of-the-art equipment, expert trainers, and a supportive community environment."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Mission & Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="mission">Mission Statement</Label>
              <Textarea 
                id="mission" 
                defaultValue="To empower individuals to live healthier, more active lives by providing exceptional fitness facilities, personalized training, and a welcoming community atmosphere."
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="vision">Vision Statement</Label>
              <Textarea 
                id="vision" 
                defaultValue="To be the leading fitness destination that transforms lives and builds a stronger, healthier community."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Values & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="values">Core Values</Label>
              <Textarea 
                id="values" 
                defaultValue="1. Excellence in Service\n2. Community Focus\n3. Health & Wellness\n4. Innovation\n5. Integrity"
                rows={5}
              />
            </div>
            <div>
              <Label htmlFor="achievements">Key Achievements</Label>
              <Textarea 
                id="achievements" 
                defaultValue="• Best Gym Award 2023\n• Over 5,000 satisfied members\n• 50+ certified trainers\n• 3 locations across the city"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Leadership
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold">John Smith</h4>
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
                <p className="text-sm">15+ years experience in fitness industry</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-muted-foreground">Head of Operations</p>
                <p className="text-sm">Expert in gym management and customer service</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}