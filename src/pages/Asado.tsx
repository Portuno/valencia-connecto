
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ChevronDown, User, MessageSquare, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AsadoPage = () => {
  // Estado para seguir en qué paso del formulario estamos
  const [step, setStep] = useState(0);
  
  // Estado para almacenar las respuestas
  const [formData, setFormData] = useState({
    gender: "",
    fullName: "",
    phone: "",
    email: "",
    allergies: "",
    dietPreference: "",
    guests: "",
    helpOrganize: false,
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Determinar el saludo según la hora del día
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Muy buenos días";
    if (hour >= 12 && hour < 20) return "Muy buenas tardes";
    return "Muy buenas noches";
  };

  const [greeting] = useState(getGreeting());
  
  // Avanzar automáticamente al siguiente paso cuando se completan ciertos campos
  useEffect(() => {
    if (formData.gender && step === 1) {
      setStep(2);
      setTimeout(() => scrollToBottom(), 100);
    }
  }, [formData.gender]);

  useEffect(() => {
    if (formData.fullName && step === 2) {
      setStep(3);
      setTimeout(() => scrollToBottom(), 100);
    }
  }, [formData.fullName]);

  useEffect(() => {
    if (formData.phone && step === 3) {
      setStep(4);
      setTimeout(() => scrollToBottom(), 100);
    }
  }, [formData.phone]);

  useEffect(() => {
    if (formData.email && step === 4) {
      setStep(5);
      setTimeout(() => scrollToBottom(), 100);
    }
  }, [formData.email]);

  // Función para avanzar al siguiente paso para campos que no tienen autoavance
  const nextStep = () => {
    setStep(step + 1);
    setTimeout(() => scrollToBottom(), 100);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  // Función para manejar el envío final del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.dietPreference) {
      toast.error("Por favor selecciona tu preferencia de comida");
      return;
    }

    setIsSubmitting(true);

    try {
      // Tipamos explícitamente los datos para evitar errores con el tipo diet_preference
      const insertData = {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        allergies: formData.allergies || null,
        diet_preference: formData.dietPreference as any, // Usamos any para evitar problemas con el tipo
        guests: formData.guests || null,
        help_organize: formData.helpOrganize,
        additional_info: formData.additionalInfo || null,
        gender: formData.gender
      };

      const { error } = await supabase
        .from('asado_registrations')
        .insert(insertData);

      if (error) throw error;

      toast.success("¡Gracias por registrarte! Te contactaremos pronto con más detalles.");
      setStep(step + 1); // Mostrar mensaje de agradecimiento
    } catch (error) {
      console.error('Error:', error);
      toast.error("Hubo un error al enviar tu registro. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">🔥 Gran Asado Terreta Hub 🔥</h1>
            <div className="space-y-2 text-lg text-gray-600">
              <p>📍 Lugar: A determinar</p>
              <p>📅 Fecha: Segunda quincena de abril</p>
            </div>
            <p className="mt-4 text-gray-700">
              Un evento para compartir, conectar y disfrutar de buena comida en un ambiente relajado.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Paso inicial: Clic para comenzar */}
            {step === 0 && (
              <Card className="border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer shadow-sm" onClick={() => setStep(1)}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-gray-700">Haz clic aquí para comenzar tu registro</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </CardContent>
              </Card>
            )}
            
            {/* Paso 1: Selección de género con saludo dinámico */}
            {step >= 1 && (
              <Card className={`border ${step === 1 ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'} shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <User className="h-5 w-5 mr-3 text-indigo-500 mt-0.5" />
                    <span className="text-gray-700 font-medium">{greeting}</span>
                  </div>
                  {step === 1 ? (
                    <div className="ml-8 mt-4">
                      <RadioGroup
                        value={formData.gender}
                        onValueChange={(value) => setFormData({...formData, gender: value})}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="señora" id="señora" />
                          <Label htmlFor="señora">Señora</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="señor" id="señor" />
                          <Label htmlFor="señor">Señor</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  ) : (
                    <div className="ml-8 mt-2">
                      <p className="text-gray-600">{formData.gender === "señora" ? "Señora" : "Señor"}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            {/* Paso 2: Nombre completo */}
            {step >= 2 && (
              <Card className={`border ${step === 2 ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'} shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <User className="h-5 w-5 mr-3 text-indigo-500 mt-0.5" />
                    <span className="text-gray-700 font-medium">¿Cuál es tu nombre completo?</span>
                  </div>
                  <div className="ml-8 mt-4">
                    <Input
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Escribe tu nombre y apellidos"
                      className={step > 2 ? "bg-gray-50" : ""}
                      readOnly={step > 2}
                      onBlur={() => {
                        if (formData.fullName && step === 2) nextStep();
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Paso 3: Teléfono */}
            {step >= 3 && (
              <Card className={`border ${step === 3 ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'} shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MessageSquare className="h-5 w-5 mr-3 text-indigo-500 mt-0.5" />
                    <span className="text-gray-700 font-medium">¿Cuál es tu número de teléfono para contactarte?</span>
                  </div>
                  <div className="ml-8 mt-4">
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Escribe tu número de teléfono"
                      className={step > 3 ? "bg-gray-50" : ""}
                      readOnly={step > 3}
                      onBlur={() => {
                        if (formData.phone && step === 3) nextStep();
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Paso 4: Correo electrónico */}
            {step >= 4 && (
              <Card className={`border ${step === 4 ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'} shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MessageSquare className="h-5 w-5 mr-3 text-indigo-500 mt-0.5" />
                    <span className="text-gray-700 font-medium">¿Cuál es tu correo electrónico?</span>
                  </div>
                  <div className="ml-8 mt-4">
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Escribe tu correo electrónico"
                      className={step > 4 ? "bg-gray-50" : ""}
                      readOnly={step > 4}
                      onBlur={() => {
                        if (formData.email && step === 4) nextStep();
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Paso 5: Alergias */}
            {step >= 5 && (
              <Card className={`border ${step === 5 ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'} shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MessageSquare className="h-5 w-5 mr-3 text-indigo-500 mt-0.5" />
                    <span className="text-gray-700 font-medium">¿Tienes alguna alergia o restricción alimenticia?</span>
                  </div>
                  <div className="ml-8 mt-4">
                    <Textarea
                      value={formData.allergies}
                      onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                      placeholder="Describe tus alergias o restricciones (si no tienes, puedes dejarlo en blanco)"
                      className={step > 5 ? "bg-gray-50" : ""}
                      readOnly={step > 5}
                    />
                    
                    <Button 
                      onClick={nextStep}
                      className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Continuar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Paso 6: Preferencia de comida */}
            {step >= 6 && (
              <Card className={`border ${step === 6 ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'} shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MessageSquare className="h-5 w-5 mr-3 text-indigo-500 mt-0.5" />
                    <span className="text-gray-700 font-medium">¿Qué prefieres comer?</span>
                  </div>
                  <div className="ml-8 mt-4">
                    <RadioGroup
                      value={formData.dietPreference}
                      onValueChange={(value) => setFormData({...formData, dietPreference: value})}
                      className={`space-y-2 ${step > 6 ? "opacity-75" : ""}`}
                      disabled={step > 6}
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
                    
                    <Button 
                      onClick={nextStep}
                      className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Continuar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Paso 7: Acompañantes */}
            {step >= 7 && (
              <Card className={`border ${step === 7 ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'} shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MessageSquare className="h-5 w-5 mr-3 text-indigo-500 mt-0.5" />
                    <span className="text-gray-700 font-medium">¿Traerás acompañantes? Si es así, ¿cuántos y quiénes?</span>
                  </div>
                  <div className="ml-8 mt-4">
                    <Textarea
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      placeholder="Detalles de tus acompañantes (si vienes solo, puedes dejarlo en blanco)"
                      className={step > 7 ? "bg-gray-50" : ""}
                      readOnly={step > 7}
                    />
                    
                    <Button 
                      onClick={nextStep}
                      className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Continuar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Paso 8: Información adicional */}
            {step >= 8 && (
              <Card className={`border ${step === 8 ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'} shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MessageSquare className="h-5 w-5 mr-3 text-indigo-500 mt-0.5" />
                    <div className="space-y-4">
                      <span className="text-gray-700 font-medium">Información adicional</span>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="helpOrganize"
                          checked={formData.helpOrganize}
                          onCheckedChange={(checked) => 
                            setFormData({...formData, helpOrganize: checked as boolean})
                          }
                          disabled={step > 8}
                        />
                        <Label htmlFor="helpOrganize">¿Te gustaría ayudar con la organización?</Label>
                      </div>
                      
                      <div>
                        <Label htmlFor="additionalInfo">¿Algo más que deberíamos saber?</Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                          placeholder="Información adicional que quieras compartir"
                          className={step > 8 ? "bg-gray-50" : ""}
                          readOnly={step > 8}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {step === 8 && (
                    <div className="ml-8 mt-4">
                      {formData.gender === "señor" && (
                        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                          <p className="text-yellow-800 font-medium">💰 Precio: 40€</p>
                          <p className="text-yellow-700 text-sm mt-1">El pago se realizará en el evento.</p>
                        </div>
                      )}
                      
                      <Button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-valencia-orange hover:bg-valencia-terracotta text-white"
                      >
                        {isSubmitting ? "Enviando..." : formData.gender === "señor" ? "Reservar mi lugar" : "Pre-reservar mi lugar"}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            {/* Paso final: Confirmación */}
            {step >= 9 && (
              <Card className="border border-green-200 bg-green-50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center text-center">
                    <div className="space-y-4">
                      <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">¡Gracias por registrarte!</h3>
                      <p className="text-gray-600">
                        Hemos recibido tu información correctamente. Te contactaremos pronto con más detalles sobre el evento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AsadoPage;
