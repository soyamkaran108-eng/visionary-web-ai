import { Link } from "react-router-dom";
import { Wrench, FileText, Calendar, Truck, Clock, Award, Star, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "Register Complaint",
    description: "Report issues like garbage overflow, public toilet problems, or drainage issues in your area.",
    path: "/complaint",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Calendar,
    title: "Events & Campaigns",
    description: "Join or organize cleanliness drives, tree plantation events, and awareness programs.",
    path: "/events",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Truck,
    title: "Track Garbage Truck",
    description: "Real-time tracking of garbage collection trucks in your area.",
    path: "/track-truck",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "Collection Schedule",
    description: "Check the garbage collection timings for your zone and area.",
    path: "/truck-timing",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Award,
    title: "Encourage Workers",
    description: "Appreciate and encourage our hardworking sanitation workers.",
    path: "/encourage",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Star,
    title: "Rate Our Service",
    description: "Provide feedback on our services to help us improve.",
    path: "/contact",
    color: "bg-teal-100 text-teal-600",
  },
];

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
          <Wrench className="w-5 h-5" />
          <span className="font-medium">Our Services</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">How Can We Help You?</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of services designed to keep your community clean and healthy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-2`}>
                  <Icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Link to={service.path}>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Access Service
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* FAQ Section */}
      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-card rounded-lg">
            <h4 className="font-medium mb-1">How do I register a complaint?</h4>
            <p className="text-sm text-muted-foreground">Go to the Complaint section, select the category, fill in the details with location, and submit.</p>
          </div>
          <div className="p-4 bg-card rounded-lg">
            <h4 className="font-medium mb-1">What is the response time for complaints?</h4>
            <p className="text-sm text-muted-foreground">We aim to address all complaints within 24-48 hours depending on the severity.</p>
          </div>
          <div className="p-4 bg-card rounded-lg">
            <h4 className="font-medium mb-1">Can I track my garbage truck in real-time?</h4>
            <p className="text-sm text-muted-foreground">Yes! Use the Track Truck feature to see live locations of garbage trucks in your area.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Services;
