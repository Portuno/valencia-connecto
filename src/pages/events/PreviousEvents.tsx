
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";

const PreviousEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Eventos Anteriores</h1>
        
        <div className="space-y-8">
          <Card className="max-w-3xl mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-full aspect-[3/2] relative mb-4">
                <img 
                  src="/lovable-uploads/23c059c4-e6c7-40ec-861f-547f3d9f702a.png" 
                  alt="Web3 Valencia Meetup" 
                  className="w-full h-full object-cover rounded-lg opacity-70"
                />
              </div>
              <CardTitle className="text-2xl font-bold">
                Web3 Valencia Meetup - RWA & Real Estate
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                Una tarde dedicada a explorar las oportunidades de RWA y Real Estate en Web3
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Jueves, 15 de Febrero</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>19:00 - 21:00</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>Marina Real Juan Carlos I, València</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Highlights del Evento:</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Updates del ecosistema Web3 Valencia</li>
                  <li>Discusiones interactivas y networking</li>
                  <li>Refrigerios y construcción de comunidad</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="max-w-3xl mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-full aspect-[3/2] relative mb-4">
                <img 
                  src="/lovable-uploads/23c059c4-e6c7-40ec-861f-547f3d9f702a.png" 
                  alt="RWA & Real Estate Valencia Meetup" 
                  className="w-full h-full object-cover rounded-lg opacity-70"
                />
              </div>
              <CardTitle className="text-2xl font-bold">
                Tokenizando Real Estate - RWA en Valencia
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                Un ambiente acogedor para conectar con las comunidades de Web3 y real estate de Valencia
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Jueves, 23 de Enero</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>19:00 - 21:00</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>C/ de la Barraca, 41, València</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Highlights del Evento:</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Conectamos con las comunidades de Web3 y real estate</li>
                  <li>Presentaciones sobre RWA y tokenización de real estate</li>
                  <li>Networking con profesionales y startups</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreviousEvents;
