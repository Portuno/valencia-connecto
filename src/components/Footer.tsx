import { Globe, Mail, Phone, Github, Linkedin, MapPin, Calendar, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-valencia-brown text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Terreta Hub</h3>
            <p className="text-gray-300 leading-relaxed">
              Valencia's International Community Platform connecting residents, digital nomads, and locals. Join us in building a vibrant, inclusive community.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/terretahub" className="text-gray-300 hover:text-valencia-orange transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/terretahub" className="text-gray-300 hover:text-valencia-orange transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/verticals/law" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Law
                </Link>
              </li>
              <li>
                <Link to="/verticals/tech" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Tech
                </Link>
              </li>
              <li>
                <Link to="/verticals/education" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Education + Art
                </Link>
              </li>
              <li>
                <Link to="/verticals/business" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Business
                </Link>
              </li>
              <li>
                <Link to="/verticals/health" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Health + Wellness
                </Link>
              </li>
              <li>
                <Link to="/verticals/hospitality" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Hospitality
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.resources")}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {t("footer.resources")}
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t("footer.documentation")}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-valencia-orange transition-colors flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t("footer.events")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <a href="mailto:info@terretahub.com" className="flex items-center text-gray-300 hover:text-valencia-orange transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@terretahub.com
              </a>
              <a href="tel:+34600000000" className="flex items-center text-gray-300 hover:text-valencia-orange transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +34 600 000 000
              </a>
              <a href="https://terretahub.com" className="flex items-center text-gray-300 hover:text-valencia-orange transition-colors">
                <Globe className="w-4 h-4 mr-2" />
                terretahub.com
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Valencia, Spain</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Terreta Hub. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}