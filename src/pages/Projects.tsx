
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

const projectFormSchema = z.object({
  name: z.string().min(2, "El nombre del proyecto debe tener al menos 2 caracteres"),
  website: z.string().url("Por favor, introduce una URL válida"),
  email: z.string().email("Por favor, introduce un email válido"),
  description: z.string().min(10, "Por favor, proporciona una descripción de tu proyecto"),
});

export default function Projects() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      website: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof projectFormSchema>) => {
    try {
      const { error } = await supabase
        .from("projects")
        .insert({
          name: values.name,
          website: values.website,
          email: values.email,
          description: values.description
        });

      if (error) throw error;

      toast.success("¡Gracias por compartir tu proyecto!");
      form.reset();
    } catch (error) {
      console.error("Error al enviar el proyecto:", error);
      toast.error("Error al enviar el proyecto. Por favor, inténtalo de nuevo.");
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
              Comparte tu Proyecto
            </h1>
            <p className="text-xl text-valencia-brown/80">
              ¿Tienes un proyecto innovador en Valencia? Compártelo con nuestra comunidad
              y conéctate con otros emprendedores, desarrolladores y creativos de la ciudad.
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
                      <FormLabel>Nombre del Proyecto</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu proyecto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sitio Web</FormLabel>
                      <FormControl>
                        <Input 
                          type="url" 
                          placeholder="https://tuproyecto.com" 
                          {...field} 
                        />
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
                      <FormLabel>Email de Contacto</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="contacto@tuproyecto.com" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción del Proyecto</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntanos sobre tu proyecto..."
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
                  Enviar Proyecto
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
