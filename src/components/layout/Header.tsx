import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Wrench, FileText, Phone, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: Info },
  { path: "/services", label: "My Service", icon: Wrench },
  { path: "/complaint", label: "Complaint", icon: FileText },
  { path: "/contact", label: "Contact Us", icon: Phone },
];

export const Header = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Top Bar */}
      <div className="bg-muted/50 py-1 px-4 text-xs text-muted-foreground flex justify-between items-center">
        <span>{new Date().toLocaleString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' })}</span>
        <div className="flex gap-2">
          <span className="w-4 h-4 rounded-full bg-muted-foreground/30" />
          <span className="w-4 h-4 rounded-full bg-muted-foreground/30" />
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest to-lime flex items-center justify-center">
              <span className="text-2xl">🌳</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold text-forest">Swachha Swatantra</h1>
              <p className="text-xs text-muted-foreground">स्वच्छता ही सेवा</p>
            </div>
          </Link>

          {/* Search & Sign In */}
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="default" size="sm" className="hidden sm:flex">
                Sign In
              </Button>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Input
                placeholder="Search.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 lg:w-56 h-9"
              />
              <Button size="sm" className="h-9 px-3">
                <Search className="w-4 h-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-gradient py-3 px-4">
        <div className="container mx-auto">
          <ul className="hidden md:flex items-center justify-center gap-8 lg:gap-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center gap-1 transition-all duration-200 ${
                      isActive 
                        ? "text-primary-foreground scale-105" 
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:scale-105"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg animate-slide-up">
          <ul className="py-4 px-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Sign In</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
