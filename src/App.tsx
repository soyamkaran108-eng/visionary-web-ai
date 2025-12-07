import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Complaint from "./pages/Complaint";
import Events from "./pages/Events";
import TrackTruck from "./pages/TrackTruck";
import TruckTiming from "./pages/TruckTiming";
import Encourage from "./pages/Encourage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes - No Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Main Routes - With Layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/events" element={<Events />} />
            <Route path="/track-truck" element={<TrackTruck />} />
            <Route path="/truck-timing" element={<TruckTiming />} />
            <Route path="/encourage" element={<Encourage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
