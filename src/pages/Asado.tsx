
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

const AsadoPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    allergies: "",
    dietPreference: "",
    guests: "",
    helpOrganize: false,
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(formData);
    toast.success("¡Gracias por registrarte! Te contactaremos pronto con más detalles.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">🔥 Gran Asado Terreta Hub 🔥</h1>
            <div className="space-y-2 text-lg text-gray-600">
              <p>📍 Lugar: A determinar</p>
              <p>📅 Fecha: Segunda quincena de abril</p>
              <p>💰 Precio: Hombres 40€</p>
            </div>
            <p className="mt-4 text-gray-700">
              Un evento para compartir, conectar y disfrutar de buena comida en un ambiente relajado. 
              ¡Reserva tu lugar ahora!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Nombre y apellido</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono 📞</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="email">Correo electrónico 📩</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="allergies">Alergias o restricciones alimenticias 🍽️</Label>
                <Textarea
                  id="allergies"
                  value={formData.allergies}
                  onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                />
              </div>

              <div>
                <Label>¿Prefieres carne, opción vegetariana o vegana? 🥩🥗</Label>
                <RadioGroup
                  value={formData.dietPreference}
                  onValueChange={(value) => setFormData({...formData, dietPreference: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="carne" id="carne" />
                    <Label htmlFor="carne">Carne</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vegetariana" id="vegetariana" />
                    <Label htmlFor="vegetariana">Vegetariana</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vegana" id="vegana" />
                    <Label htmlFor="vegana">Vegana</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="guests">¿Vas a traer acompañantes? (En caso afirmativo, ¿cuántos y quiénes?) 👥</Label>
                <Textarea
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="helpOrganize"
                  checked={formData.helpOrganize}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, helpOrganize: checked as boolean})
                  }
                />
                <Label htmlFor="helpOrganize">¿Te gustaría ayudar con la organización? 🤝</Label>
              </div>

              <div>
                <Label htmlFor="additionalInfo">¿Algo más que deberíamos saber? ✍️</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-valencia-orange hover:bg-valencia-terracotta text-white"
            >
              Reservar mi lugar
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AsadoPage;
