import { Navbar } from "@/components/Navbar";
import { useLanguage, LanguageProvider } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock } from "lucide-react";

const EventsContent = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{t("events.title")}</h1>
      
      <Card className="max-w-3xl mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <div className="w-full aspect-[3/2] relative mb-4">
            <img 
              src="/lovable-uploads/23c059c4-e6c7-40ec-861f-547f3d9f702a.png" 
              alt="RWA & Real Estate Valencia Meetup" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-2xl font-bold">
            Tokenizing Real Estate - RWA in Valencia
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 mt-2">
            A welcoming atmosphere to connect with Valencia's Web3 and real estate communities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>Thursday, January 23</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>7:00 PM - 9:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>C/ de la Barraca, 41, València</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">What to Expect:</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              <li>A welcoming atmosphere to connect with Valencia's Web3 and real estate communities</li>
              <li>Insightful presentations and discussions on RWA basics and real estate tokenization</li>
              <li>Opportunities to network with professionals and startups driving innovation in this space</li>
            </ul>
          </div>

          <Button 
            className="w-full bg-valencia-orange hover:bg-valencia-terracotta text-white mt-4"
            onClick={() => window.open('https://lu.ma/ttxyuetg', '_blank')}
          >
            Register for Event
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const Events = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <EventsContent />
      </div>
    </LanguageProvider>
  );
};

export default Events;