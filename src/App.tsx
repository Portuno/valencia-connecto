import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Feedback from "./pages/Feedback";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Verticals from "./pages/Verticals";
import Law from "./pages/verticals/Law";
import Tech from "./pages/verticals/Tech";
import Education from "./pages/verticals/Education";
import Business from "./pages/verticals/Business";
import Health from "./pages/verticals/Health";
import Hospitality from "./pages/verticals/Hospitality";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/verticals" element={<Verticals />} />
          <Route path="/verticals/law" element={<Law />} />
          <Route path="/verticals/tech" element={<Tech />} />
          <Route path="/verticals/education" element={<Education />} />
          <Route path="/verticals/business" element={<Business />} />
          <Route path="/verticals/health" element={<Health />} />
          <Route path="/verticals/hospitality" element={<Hospitality />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;