import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Gavel, Scale, BookOpen, FileText } from "lucide-react";

export default function Law() {
  const services = [
    {
      title: "Legal Services",
      icon: Gavel,
      items: [
        "Business Registration",
        "Immigration Law",
        "Property Law",
        "Contract Review",
        "Legal Consultation"
      ]
    },
    {
      title: "Documentation",
      icon: FileText,
      items: [
        "Legal Templates",
        "Visa Applications",
        "Business Permits",
        "Residency Documents",
        "Tax Forms"
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      items: [
        "Legal Guides",
        "Spanish Law Basics",
        "EU Regulations",
        "Case Studies",
        "Legal Updates"
      ]
    },
    {
      title: "Compliance",
      icon: Scale,
      items: [
        "Business Compliance",
        "Data Protection",
        "Employment Law",
        "Industry Standards",
        "Regulatory Updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Gavel className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Legal Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate Valencia's legal landscape with expert guidance and comprehensive support.
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