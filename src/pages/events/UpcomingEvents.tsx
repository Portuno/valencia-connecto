
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Próximos Eventos</h1>
        
        <div className="space-y-8">
          <Card className="max-w-3xl mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-full aspect-[3/2] relative mb-4">
                <img 
                  src="/lovable-uploads/27357658-6945-4c10-962e-6415e5ce0881.png" 
                  alt="¿Cómo Monetizar en Web3?" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <CardTitle className="text-2xl font-bold">
                ¿Cómo Monetizar en Web3?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                Únete a nosotros para una tarde dedicada a explorar las oportunidades de monetización
                en el ecosistema Web3
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Jueves, 27 de Febrero</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>19:00 - 21:30 GMT+1</span>
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
                Registrarse al Evento
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
