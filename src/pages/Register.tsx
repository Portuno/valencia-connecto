import { Navbar } from "@/components/Navbar";
import { RegistrationForm } from "@/components/RegistrationForm";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Register = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20 pb-16">
          <RegistrationForm />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Register;