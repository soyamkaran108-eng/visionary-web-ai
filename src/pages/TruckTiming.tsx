import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const schedules = [
  {
    zone: "Zone 1 - Neharu Nagar",
    areas: [
      { name: "Sanjay Nagar", time: "6:00 AM - 7:00 AM", days: "Mon, Wed, Fri" },
      { name: "Hasanbaag", time: "7:00 AM - 8:00 AM", days: "Mon, Wed, Fri" },
      { name: "Civil Lines", time: "8:00 AM - 9:00 AM", days: "Tue, Thu, Sat" },
    ],
  },
  {
    zone: "Zone 2 - Dharampeth",
    areas: [
      { name: "Law College Square", time: "6:30 AM - 7:30 AM", days: "Mon, Wed, Fri" },
      { name: "Seminary Hills", time: "7:30 AM - 8:30 AM", days: "Tue, Thu, Sat" },
      { name: "Ramdaspeth", time: "8:30 AM - 9:30 AM", days: "Daily" },
    ],
  },
  {
    zone: "Zone 3 - Sitabuldi",
    areas: [
      { name: "Main Road", time: "5:30 AM - 6:30 AM", days: "Daily" },
      { name: "Variety Square", time: "6:30 AM - 7:30 AM", days: "Mon, Wed, Fri" },
      { name: "Telephone Exchange", time: "7:30 AM - 8:30 AM", days: "Tue, Thu, Sat" },
    ],
  },
  {
    zone: "Zone 4 - Itwari",
    areas: [
      { name: "Gandhibagh", time: "5:00 AM - 6:00 AM", days: "Daily" },
      { name: "Maskasath", time: "6:00 AM - 7:00 AM", days: "Mon, Wed, Fri" },
      { name: "Cotton Market", time: "7:00 AM - 8:00 AM", days: "Daily" },
    ],
  },
];

const TruckTiming = () => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h1 className="font-display text-2xl font-bold flex items-center gap-2 mb-6">
        <Clock className="w-8 h-8 text-primary" />
        Garbage Truck Timings
      </h1>

      <p className="text-muted-foreground mb-8">
        Find out when the garbage truck will arrive in your area. Please ensure your waste is ready for collection during the scheduled time.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {schedules.map((schedule) => (
          <Card key={schedule.zone}>
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="text-lg">{schedule.zone}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {schedule.areas.map((area) => (
                  <div key={area.name} className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{area.name}</p>
                      <p className="text-sm text-muted-foreground">{area.days}</p>
                    </div>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      {area.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-amber-800 mb-2">Important Note</h3>
          <ul className="text-sm text-amber-700 space-y-1 list-disc list-inside">
            <li>Timings may vary during festivals and public holidays</li>
            <li>Please segregate your waste (wet/dry) before collection</li>
            <li>For any missed collections, please register a complaint</li>
            <li>Contact helpline: 1800-XXX-XXXX for emergency pickups</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TruckTiming;
