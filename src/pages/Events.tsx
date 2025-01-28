import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600 mb-6">
              Discover and register for our upcoming events. Join the Valencia international community for networking, learning, and fun!
            </p>
            <Button 
              className="w-full bg-valencia-orange hover:bg-valencia-terracotta text-white"
              onClick={() => navigate('/events/upcoming')}
            >
              View Upcoming Events
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4">Previous Events</h2>
            <p className="text-gray-600 mb-6">
              Take a look at our past events and see what you've missed. Get a glimpse of our community gatherings and activities.
            </p>
            <Button 
              className="w-full bg-valencia-orange hover:bg-valencia-terracotta text-white"
              onClick={() => navigate('/events/previous')}
            >
              View Previous Events
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;