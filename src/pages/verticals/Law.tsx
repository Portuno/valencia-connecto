import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Gavel } from "lucide-react";

export default function Law() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Gavel className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Legal Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting legal professionals, facilitating knowledge exchange, and fostering innovation in Valencia's legal sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Services</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Legal consultations and advice</li>
              <li>• Document review and preparation</li>
              <li>• Immigration law support</li>
              <li>• Business law guidance</li>
              <li>• Property law assistance</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Opportunities</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Networking events with legal professionals</li>
              <li>• Legal workshops and seminars</li>
              <li>• Pro-bono opportunities</li>
              <li>• Mentorship programs</li>
              <li>• Legal tech innovation projects</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}