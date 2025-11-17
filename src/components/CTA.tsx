import { Button } from "./ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <section className="bg-teal-600 text-white py-20 px-6 md:px-20 my-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-start">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              {t('cta.title')}
            </h2>
            <p className="font-rubik text-lg text-teal-100 mb-6">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="font-rubik">{t('cta.call')} (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="font-rubik">{t('cta.email')} sales@cardealer.com</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-teal-700 hover:bg-gray-100 font-semibold border-2 border-gray-300"
              onClick={() => navigate('/cars')}
            >
              {t('cta.browseInventory')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-teal-700 hover:bg-gray-100 font-semibold border-2 border-gray-300"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
            >
              {t('cta.scheduleTestDrive')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

