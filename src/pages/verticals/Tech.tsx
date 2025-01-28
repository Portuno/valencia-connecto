import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Code, Database, Network, Cpu } from "lucide-react";

export default function Tech() {
  const services = [
    {
      title: "Software Development",
      icon: Code,
      items: [
        "Web Applications",
        "Mobile Development",
        "Custom Software",
        "API Integration",
        "Cloud Solutions"
      ]
    },
    {
      title: "Data Services",
      icon: Database,
      items: [
        "Data Analytics",
        "Business Intelligence",
        "Database Management",
        "Data Migration",
        "Big Data Solutions"
      ]
    },
    {
      title: "Infrastructure",
      icon: Network,
      items: [
        "Cloud Computing",
        "Network Security",
        "System Integration",
        "DevOps Services",
        "IT Consulting"
      ]
    },
    {
      title: "Innovation",
      icon: Cpu,
      items: [
        "AI & Machine Learning",
        "IoT Solutions",
        "Blockchain",
        "Digital Transformation",
        "Tech Consulting"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Code className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Technology Innovation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Driving digital transformation and technological advancement in Valencia.
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