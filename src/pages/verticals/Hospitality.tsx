import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UtensilsCrossed } from "lucide-react";

export default function Hospitality() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <UtensilsCrossed className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Hospitality</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhancing Valencia's tourism and hospitality sector through innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Tourism Services</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Cultural tourism programs</li>
              <li>• Local experience curation</li>
              <li>• Tourism business consulting</li>
              <li>• Sustainable tourism initiatives</li>
              <li>• Digital tourism solutions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Hospitality Network</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Restaurant partnerships</li>
              <li>• Accommodation services</li>
              <li>• Event venues network</li>
              <li>• Industry networking events</li>
              <li>• Hospitality training programs</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}