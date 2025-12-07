import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, FileText, ThumbsUp, ThumbsDown, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const sampleEvents = [
  {
    id: 1,
    name: "Tree Plantation",
    organizer: "MR foundation of naturecare",
    date: "13 April 2025",
    venue: "Seminary Hills Rd, CPWD Colony, Seminary Hills, Nagpur",
    image: "🌳",
    likes: 24,
  },
  {
    id: 2,
    name: "Beach Cleanup Drive",
    organizer: "Clean Ocean Initiative",
    date: "20 April 2025",
    venue: "Kalyaneshwar Mandir Rd, Mahal, Nagpur",
    image: "🏖️",
    likes: 18,
  },
];

type View = "main" | "all" | "register";

const Events = () => {
  const [view, setView] = useState<View>("main");
  const [formData, setFormData] = useState({
    eventName: "",
    organizer: "",
    date: "",
    venue: "",
    category: "",
    description: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Event Registered!",
      description: "Your event has been submitted for approval.",
    });
    setView("main");
  };

  if (view === "register") {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-primary">Event Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Event Name</Label>
                <Input
                  placeholder="Enter event name"
                  value={formData.eventName}
                  onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Organizer</Label>
                <Input
                  placeholder="Organizer name"
                  value={formData.organizer}
                  onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Choose Date:</Label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Venue</Label>
                <Textarea
                  placeholder="Enter a Event venue"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Category</Label>
                <Select value={formData.category} onValueChange={(v) => setFormData({ ...formData, category: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cleanup">Cleanup Drive</SelectItem>
                    <SelectItem value="plantation">Tree Plantation</SelectItem>
                    <SelectItem value="awareness">Awareness Program</SelectItem>
                    <SelectItem value="recycling">Recycling Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  placeholder="Write a short description..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div>
                <Label>Upload Poster</Label>
                <Input type="file" accept="image/*" />
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <Button type="button" variant="outline" onClick={() => setView("main")}>
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (view === "all") {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-2xl font-bold">All Events</h1>
          <Button variant="outline" onClick={() => setView("main")}>Back</Button>
        </div>
        <p className="text-muted-foreground mb-6">
          Explore upcoming community events and initiatives for a cleaner environment.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {sampleEvents.map((event) => (
            <Card key={event.id} className="bg-sky-50 border-sky-200/50">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">{event.image}</div>
                <div className="space-y-2 text-sm">
                  <p><strong>Event:</strong> {event.name}</p>
                  <p><strong>Organizer:</strong> {event.organizer}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-pink-400 rounded-b-lg p-3 flex justify-center gap-4">
                <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                  <ThumbsUp className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                  <ThumbsDown className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h1 className="font-display text-2xl font-bold text-center mb-4">Event Section</h1>
      <p className="text-center text-muted-foreground mb-8">
        Join our community events or register your own cleanliness initiatives. Together we can make a difference!
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <Card
          className="w-48 cursor-pointer hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 bg-teal text-primary-foreground"
          onClick={() => setView("all")}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FileText className="w-10 h-10 mb-3" />
            <span className="font-medium">Seen All Events</span>
          </CardContent>
        </Card>

        <Card
          className="w-48 cursor-pointer hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 bg-teal text-primary-foreground"
          onClick={() => setView("register")}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Calendar className="w-10 h-10 mb-3" />
            <span className="font-medium">Enter your Event Here</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;
