import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building, TrendingUp, Target, HandshakeIcon } from "lucide-react";

export default function Business() {
  const services = [
    {
      title: "Business Development",
      icon: Building,
      items: [
        "Market Research",
        "Business Planning",
        "Growth Strategy",
        "Financial Analysis",
        "Risk Assessment"
      ]
    },
    {
      title: "Market Growth",
      icon: TrendingUp,
      items: [
        "Market Entry",
        "Expansion Strategy",
        "Sales Optimization",
        "Digital Marketing",
        "Brand Development"
      ]
    },
    {
      title: "Strategic Planning",
      icon: Target,
      items: [
        "Business Strategy",
        "Market Analysis",
        "Competitive Research",
        "Performance Metrics",
        "Growth Planning"
      ]
    },
    {
      title: "Partnerships",
      icon: HandshakeIcon,
      items: [
        "Network Building",
        "Strategic Alliances",
        "Joint Ventures",
        "Industry Connections",
        "Business Matching"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Building className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Business Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting business growth and development in Valencia's dynamic economy.
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