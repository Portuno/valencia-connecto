
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";

const UpcomingEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
        
        <div className="space-y-8">
          <Card className="max-w-3xl mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-full aspect-[3/2] relative mb-4">
                <img 
                  src="/lovable-uploads/photo-1605810230434-7631ac76ec81.jpg" 
                  alt="Distribución en la era Digital" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <CardTitle className="text-2xl font-bold">
                Distribución en la era Digital
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                Únete a nosotros para una tarde dedicada a explorar cómo la tecnología está transformando 
                la distribución y logística en la era digital
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Thursday, February 27</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>7:00 PM - 9:30 PM GMT+1</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>C/ de la Barraca, 41, Poblados Marítimos, 46011 València</span>
                </div>
              </div>

              <Button 
                className="w-full bg-valencia-orange hover:bg-valencia-terracotta text-white mt-4"
                onClick={() => window.open('https://lu.ma/event/evt-jYNy4Iy6FEDHGOB', '_blank')}
              >
                Register for Event
              </Button>
            </CardContent>
          </Card>

          <Card className="max-w-3xl mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-full aspect-[3/2] relative mb-4">
                <img 
                  src="/lovable-uploads/23c059c4-e6c7-40ec-861f-547f3d9f702a.png" 
                  alt="Web3 Valencia Meetup" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <CardTitle className="text-2xl font-bold">
                Web3 Valencia Meetup - February Edition
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                Join us for an evening of networking and insights into the latest Web3 developments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Thursday, February 15</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>7:00 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>Marina Real Juan Carlos I, València</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">What to Expect:</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Latest updates from the Valencia Web3 ecosystem</li>
                  <li>Interactive discussions and networking opportunities</li>
                  <li>Refreshments and community building</li>
                </ul>
              </div>

              <Button 
                className="w-full bg-valencia-orange hover:bg-valencia-terracotta text-white mt-4"
                onClick={() => window.open('https://lu.ma/web3valencia', '_blank')}
              >
                Register for Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpcomingEvents;
