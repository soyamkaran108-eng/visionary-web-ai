import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Truck, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Create truck icon
const truckIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const trucks = [
  { id: 1, name: "Truck #101", driver: "Rajesh Sharma", lat: 21.1458, lng: 79.0882, status: "active" },
  { id: 2, name: "Truck #102", driver: "Herolal Honda", lat: 21.1558, lng: 79.0982, status: "active" },
  { id: 3, name: "Truck #103", driver: "Ramakant Pandey", lat: 21.1358, lng: 79.0782, status: "idle" },
];

function AnimatedTruck({ position }: { position: [number, number] }) {
  const [currentPos, setCurrentPos] = useState(position);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPos((prev) => [
        prev[0] + (Math.random() - 0.5) * 0.002,
        prev[1] + (Math.random() - 0.5) * 0.002,
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Marker position={currentPos} icon={truckIcon}>
      <Popup>Active garbage truck in area</Popup>
    </Marker>
  );
}

const TrackTruck = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold flex items-center gap-2">
          <Truck className="w-8 h-8 text-primary" />
          Track the Truck
        </h1>
        <Button onClick={handleGetLocation} className="gap-2">
          <Navigation className="w-4 h-4" />
          Get My Location
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0 overflow-hidden rounded-lg">
              <div className="h-96 lg:h-[500px]">
                <MapContainer
                  center={userLocation || [21.1458, 79.0882]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {trucks.map((truck) => (
                    <AnimatedTruck key={truck.id} position={[truck.lat, truck.lng]} />
                  ))}
                  {userLocation && (
                    <Marker position={userLocation}>
                      <Popup>Your Location</Popup>
                    </Marker>
                  )}
                </MapContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Truck List */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Trucks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trucks.map((truck) => (
                <div
                  key={truck.id}
                  className={`p-3 rounded-lg border ${
                    truck.status === "active"
                      ? "bg-green-50 border-green-200"
                      : "bg-muted border-muted-foreground/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      truck.status === "active" ? "bg-green-500 animate-pulse" : "bg-muted-foreground"
                    }`} />
                    <div>
                      <p className="font-medium">{truck.name}</p>
                      <p className="text-sm text-muted-foreground">Driver: {truck.driver}</p>
                      <p className="text-xs text-muted-foreground capitalize">Status: {truck.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrackTruck;
