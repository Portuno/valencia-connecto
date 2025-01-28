import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart } from "lucide-react";

export default function Health() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Health + Wellness</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Promoting health innovation and wellness programs for a better quality of life in Valencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Health Services</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Healthcare navigation support</li>
              <li>• Mental health resources</li>
              <li>• Preventive care programs</li>
              <li>• Medical tourism services</li>
              <li>• Health tech innovations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Wellness Programs</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Fitness and yoga classes</li>
              <li>• Nutrition workshops</li>
              <li>• Mindfulness sessions</li>
              <li>• Wellness retreats</li>
              <li>• Community sports events</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}