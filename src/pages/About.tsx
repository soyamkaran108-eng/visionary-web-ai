import { Target, Eye, Users, Recycle, Leaf, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  { icon: Recycle, title: "Sustainability", description: "Promoting eco-friendly waste management practices" },
  { icon: Users, title: "Community", description: "Engaging citizens in cleanliness initiatives" },
  { icon: Leaf, title: "Environment", description: "Protecting our environment for future generations" },
  { icon: Award, title: "Excellence", description: "Delivering high-quality services to all citizens" },
];

const About = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">About Swachha Swatantra</h1>
        <p className="text-lg text-muted-foreground">
          Building a cleaner, greener, and healthier India through community participation and technology.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To create sustainable waste management solutions that empower communities,
              protect the environment, and ensure a cleaner future for all citizens
              through technology-driven services and active community participation.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A waste-free India where every citizen takes pride in maintaining cleanliness,
              where resources are recycled and reused, and where sustainable practices
              are a way of life for every community.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="text-center hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-lime/50 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-forest" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-forest to-teal rounded-2xl p-8 text-primary-foreground">
        <h2 className="font-display text-2xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p className="text-sm opacity-80">Zones Covered</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1M+</p>
            <p className="text-sm opacity-80">Citizens Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold">500+</p>
            <p className="text-sm opacity-80">Dedicated Workers</p>
          </div>
          <div>
            <p className="text-4xl font-bold">95%</p>
            <p className="text-sm opacity-80">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Swachh Bharat Initiative */}
      <section className="mt-12 text-center">
        <h2 className="font-display text-2xl font-bold mb-4">Part of Swachh Bharat Mission</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Swachha Swatantra is proud to be a part of the Swachh Bharat Mission, India's largest
          cleanliness campaign launched in 2014. We work tirelessly to achieve the vision of a
          clean India through door-to-door waste collection, proper waste segregation, and
          creating awareness about hygiene and sanitation.
        </p>
        <div className="mt-6 text-4xl">🇮🇳</div>
      </section>
    </div>
  );
};

export default About;
