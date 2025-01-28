import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UtensilsCrossed, Home, Map, Calendar } from "lucide-react";

export default function Hospitality() {
  const services = [
    {
      title: "Accommodation",
      icon: Home,
      items: [
        "Housing Support",
        "Rental Assistance",
        "Property Search",
        "Temporary Housing",
        "Relocation Services"
      ]
    },
    {
      title: "Food & Dining",
      icon: UtensilsCrossed,
      items: [
        "Restaurant Guide",
        "Local Cuisine",
        "Food Tours",
        "Culinary Events",
        "Dining Recommendations"
      ]
    },
    {
      title: "Tourism",
      icon: Map,
      items: [
        "City Tours",
        "Cultural Visits",
        "Local Experiences",
        "Travel Planning",
        "Tourist Information"
      ]
    },
    {
      title: "Events",
      icon: Calendar,
      items: [
        "Local Events",
        "Cultural Festivals",
        "Social Gatherings",
        "Community Events",
        "Entertainment"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <UtensilsCrossed className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Hospitality Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhancing the experience of visitors and residents in Valencia through comprehensive hospitality services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-valencia-orange mr-3" />
                <h2 className="text-2xl font-bold text-valencia-brown">{service.title}</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}