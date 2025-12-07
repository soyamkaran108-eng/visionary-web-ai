import { Link } from "react-router-dom";
import { FileText, Calendar, Truck, Clock, Award, Star, MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: FileText, label: "Write a Complaint", path: "/complaint", color: "bg-amber-100" },
  { icon: Calendar, label: "Arrange A Event", path: "/events", color: "bg-amber-100" },
  { icon: Truck, label: "Find a garbage Truck", path: "/track-truck", color: "bg-amber-100" },
  { icon: Clock, label: "Check The Timing of Truck", path: "/truck-timing", color: "bg-amber-100" },
  { icon: Award, label: "Encourage a Worker", path: "/encourage", color: "bg-amber-100" },
  { icon: Star, label: "Rate Our Service", path: "/contact", color: "bg-amber-100" },
];

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Hero Quote */}
      <div className="text-center mb-10">
        <blockquote className="text-lg md:text-xl text-foreground font-medium italic leading-relaxed">
          "Dear Citizen, together we strive for a cleaner today and a greener tomorrow – turning waste
          into a resource for a better future."
        </blockquote>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link key={service.path} to={service.path}>
              <Card className="group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full bg-amber-50 border-amber-200/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-amber-200/50 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-amber-700 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{service.label}</span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* About Section */}
      <section className="mb-12">
        <p className="text-muted-foreground leading-relaxed text-justify">
          At Swachha Swatantra, we offer complete solid waste management solutions to create cleaner and healthier communities. Our services begin
          with efficient door-to-door collection from households, institutions, and businesses, ensuring waste is managed in a safe and hygienic manner. We
          encourage segregation at source, helping citizens separate biodegradable, recyclable, and hazardous waste to reduce landfill pressure and promote
          recycling. Collected materials are sent to certified recyclers, turning waste into valuable resources and supporting a circular economy. For non-
          recyclable waste, we adopt safe disposal methods that follow environmental standards and protect public health. Through our smart platform,
          citizens can register complaints, track service requests, and access transparent updates, ensuring accountability in every step. Alongside operations,
          we run awareness programs and community campaigns to inspire eco-friendly habits. By combining technology, sustainable practices, and public
          participation, we aim to transform waste into opportunity and build a greener future.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-card-foreground text-card rounded-2xl p-8">
        <h2 className="font-display text-2xl font-bold mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm opacity-80">Email:</p>
                <p>swachchaswatantra@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm opacity-80">Phone no:</p>
                <p>8888089807</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm opacity-80">Address:</p>
                <p>Plot no.10, Hasanbag police chowki, Nagpur, Maharashtra 440009</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <Input placeholder="Your Name" className="bg-muted-foreground/20 border-0 text-card placeholder:text-card/60" />
            <Input type="email" placeholder="Your Email" className="bg-muted-foreground/20 border-0 text-card placeholder:text-card/60" />
            <Textarea placeholder="Your Message" className="bg-muted-foreground/20 border-0 text-card placeholder:text-card/60 min-h-[100px]" />
            <Button variant="outline" className="bg-primary border-primary text-primary-foreground hover:bg-primary/90">
              Submit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
