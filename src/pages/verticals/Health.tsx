import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Activity, Smile, Brain } from "lucide-react";

export default function Health() {
  const services = [
    {
      title: "Healthcare Services",
      icon: Heart,
      items: [
        "Medical Assistance",
        "Healthcare Navigation",
        "Insurance Support",
        "Medical Translation",
        "Health Records"
      ]
    },
    {
      title: "Wellness Programs",
      icon: Activity,
      items: [
        "Fitness Classes",
        "Nutrition Planning",
        "Wellness Workshops",
        "Sports Activities",
        "Health Tracking"
      ]
    },
    {
      title: "Mental Health",
      icon: Brain,
      items: [
        "Counseling Services",
        "Stress Management",
        "Support Groups",
        "Mindfulness Sessions",
        "Mental Wellness"
      ]
    },
    {
      title: "Lifestyle",
      icon: Smile,
      items: [
        "Work-Life Balance",
        "Healthy Living",
        "Social Activities",
        "Community Support",
        "Wellness Events"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Health & Wellness</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Promoting health, wellness, and balanced living in Valencia's community.
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