
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const sponsorFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor, introduce un email válido"),
  company: z.string().min(2, "El nombre de la empresa debe tener al menos 2 caracteres"),
  message: z.string().min(10, "Por favor, proporciona un breve mensaje sobre tu interés"),
});

export default function Sponsor() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof sponsorFormSchema>>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof sponsorFormSchema>) => {
    try {
      const { error } = await supabase
        .from("sponsors")
        .insert([{
          name: values.name,
          email: values.email,
          company: values.company,
          message: values.message
        }]);

      if (error) throw error;

      toast.success("¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.");
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-valencia-cream/30 to-valencia-sage/20">
      <div className="container mx-auto px-4 py-16 relative">
        <Button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 bg-valencia-orange hover:bg-valencia-terracotta flex items-center gap-2"
        >
          <Home className="h-4 w-4" />
          Volver al Inicio
        </Button>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-valencia-brown">
              Patrocina Nuestros Eventos
            </h1>
            <p className="text-xl text-valencia-brown/80">
              ¡Únete a construir el hub tecnológico de Valencia! Como patrocinador de nuestros eventos, 
              conectarás con profesionales internacionales del sector tech y tendrás un impacto directo 
              en el crecimiento del ecosistema tecnológico de la ciudad.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="tu@email.com" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de tu empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntanos sobre tu interés en patrocinar nuestros eventos..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-valencia-orange hover:bg-valencia-terracotta"
                >
                  Enviar Solicitud de Patrocinio
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
