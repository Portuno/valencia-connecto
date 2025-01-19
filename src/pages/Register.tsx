import { Navbar } from "@/components/Navbar";
import { PreRegistrationForm } from "@/components/pre-registration/PreRegistrationForm";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Register = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20 pb-16">
          <PreRegistrationForm />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Register;