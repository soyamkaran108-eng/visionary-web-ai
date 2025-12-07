import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const employees = [
  {
    id: "Emp0245824",
    name: "Rajesh Sharma",
    job: "Truck Driver",
    age: 25,
    zone: "Neharu Nagar(5)",
    area: "Sanjay Nagar, Hasanbaag Police Chowki, Nagpur",
  },
  {
    id: "Emp0245820",
    name: "Herolal Honda",
    job: "Sweeper",
    age: 30,
    zone: "Neharu Nagar(5)",
    area: "Civil Lines, Nagpur",
  },
  {
    id: "Emp0245822",
    name: "Saurbha Desai",
    job: "Garbage Collector",
    age: 48,
    zone: "Neharu Nagar(5)",
    area: "Dharampeth, Nagpur",
  },
  {
    id: "Emp0245821",
    name: "Ramakant Pandey",
    job: "Truck Driver",
    age: 33,
    zone: "Neharu Nagar(5)",
    area: "Sitabuldi, Nagpur",
  },
];

type View = "list" | "form";

const Encourage = () => {
  const [view, setView] = useState<View>("list");
  const [selectedEmployee, setSelectedEmployee] = useState<typeof employees[0] | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    description: "",
  });
  const { toast } = useToast();

  const handleEmployeeSelect = (emp: typeof employees[0]) => {
    setSelectedEmployee(emp);
    setView("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: `Your encouragement for ${selectedEmployee?.name} has been submitted.`,
    });
    setView("list");
    setRating(0);
    setFormData({ username: "", address: "", description: "" });
  };

  if (view === "form" && selectedEmployee) {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Encouragement Form</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Employee Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 p-4 bg-muted rounded-lg">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="text-2xl bg-primary/20">
                  {selectedEmployee.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left space-y-1">
                <p><strong>Employee ID:</strong> {selectedEmployee.id}</p>
                <p><strong>Job:</strong> {selectedEmployee.job}</p>
                <p><strong>Name:</strong> {selectedEmployee.name}</p>
                <p><strong>Zone No.:</strong> {selectedEmployee.zone}</p>
                <p><strong>Age:</strong> {selectedEmployee.age} Years</p>
                <p><strong>Main area:</strong> {selectedEmployee.area}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Username</Label>
                <Input
                  placeholder="Your name"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  placeholder="Your address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Rate the Employee</Label>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-8 h-8 cursor-pointer transition-colors ${
                        star <= (hoverRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  placeholder="Write a short description..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="flex gap-3 justify-center pt-2">
                <Button type="button" variant="outline" onClick={() => setView("list")}>
                  Back
                </Button>
                <Button type="submit" className="bg-green-600 hover:bg-green-700">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">Our Shining Employee, At your Service!</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {employees.map((emp) => (
          <Card key={emp.id} className="bg-sky-100 border-sky-200/50">
            <CardContent className="p-4">
              <div className="flex justify-center mb-4">
                <Avatar className="w-28 h-28">
                  <AvatarFallback className="text-3xl bg-sky-200 text-sky-700">
                    {emp.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-1 text-sm">
                <p><strong>Name:</strong> {emp.name}</p>
                <p><strong>Employee ID:</strong> {emp.id}</p>
                <p><strong>Job:</strong> {emp.job}</p>
                <p><strong>Age:</strong> {emp.age} Years</p>
                <p><strong>Zone:</strong> {emp.zone}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleEmployeeSelect(emp)}
              >
                Encouragement Form
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Encourage;
