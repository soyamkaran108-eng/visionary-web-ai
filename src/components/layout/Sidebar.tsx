import { Link, useLocation } from "react-router-dom";
import { FileText, Calendar, Truck, Clock, Award } from "lucide-react";

const sidebarItems = [
  { path: "/complaint", label: "Complaint Section", icon: FileText },
  { path: "/events", label: "Events Section", icon: Calendar },
  { path: "/track-truck", label: "Track the Truck", icon: Truck },
  { path: "/truck-timing", label: "Check Time for Truck", icon: Clock },
  { path: "/encourage", label: "Encourage the Employee", icon: Award },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-48 lg:w-56 sidebar-gradient min-h-[calc(100vh-200px)] py-6">
      <div className="w-20 h-8 bg-muted-foreground/30 rounded mx-4 mb-6" />
      <nav>
        <ul className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-200 border-l-4 ${
                    isActive
                      ? "border-primary bg-card/50 text-sidebar-primary"
                      : "border-transparent text-sidebar-foreground hover:bg-card/30 hover:border-primary/50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
