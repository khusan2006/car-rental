import MainImg from "../assets/main.png";
import FirstIcon from "../assets/icon1 (1).png";
import SecondIcon from "../assets/icon2 (1).png";
import ThirdIcon from "../assets/icon3 (1).png";
import { ArrowRight, MapPin, DollarSign, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ChooseUS = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const benefits = [
    {
      icon: MapPin,
      title: t('chooseUs.benefit1.title'),
      description: t('chooseUs.benefit1.description'),
      image: FirstIcon
    },
    {
      icon: DollarSign,
      title: t('chooseUs.benefit2.title'),
      description: t('chooseUs.benefit2.description'),
      image: SecondIcon
    },
    {
      icon: Shield,
      title: t('chooseUs.benefit3.title'),
      description: t('chooseUs.benefit3.description'),
      image: ThirdIcon
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img className="w-full h-auto" src={MainImg} alt="picture of cars" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <span className="text-teal-700 font-semibold text-sm uppercase tracking-wide">
                {t('chooseUs.subtitle')}
              </span>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl mt-2 mb-4 text-gray-900">
                {t('chooseUs.title')}
              </h2>
              <p className="font-rubik text-lg text-gray-600 leading-relaxed mb-6">
                {t('chooseUs.description')}
              </p>
              <Button 
                className="bg-teal-700 hover:bg-teal-700" 
                size={'lg'}
                onClick={() => navigate('/cars')}
              >
                {t('chooseUs.browseInventory')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0">
                      <div className="bg-teal-400 p-3 rounded-xl group-hover:bg-teal-700 transition-colors">
                        <Icon className="h-6 w-6 text-teal-700 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-xl mb-2 text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="font-rubik text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUS;

