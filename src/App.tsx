
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Events from "./pages/Events";
import PreviousEvents from "./pages/events/PreviousEvents";
import UpcomingEvents from "./pages/events/UpcomingEvents";
import Feedback from "./pages/Feedback";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Verticals from "./pages/Verticals";
import Law from "./pages/verticals/Law";
import Tech from "./pages/verticals/Tech";
import Audiovisual from "./pages/verticals/Audiovisual";
import Business from "./pages/verticals/Business";
import Health from "./pages/verticals/Health";
import Hospitality from "./pages/verticals/Hospitality";
import Sponsor from "./pages/Sponsor";
import Asado from "./pages/Asado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/previous" element={<PreviousEvents />} />
            <Route path="/events/upcoming" element={<UpcomingEvents />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/verticals" element={<Verticals />} />
            <Route path="/verticals/law" element={<Law />} />
            <Route path="/verticals/tech" element={<Tech />} />
            <Route path="/verticals/audiovisual" element={<Audiovisual />} />
            <Route path="/verticals/business" element={<Business />} />
            <Route path="/verticals/health" element={<Health />} />
            <Route path="/verticals/hospitality" element={<Hospitality />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/asado" element={<Asado />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
