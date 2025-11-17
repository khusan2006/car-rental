import Icon1 from "@/assets/icon1.png";
import Icon2 from "@/assets/icon2.png";
import Icon3 from "@/assets/icon3.png";
import MainImg from "@/assets/about-main.jpg";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const features = [
    t('about.feature1'),
    t('about.feature2'),
    t('about.feature3'),
    t('about.feature4'),
    t('about.feature5'),
    t('about.feature6'),
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="flex-1">
            <div className="relative">
              <img 
                src={MainImg} 
                alt="About our company" 
                className="w-full rounded-2xl shadow-xl" 
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-700 text-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">{t('about.yearsBadge')}</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="mb-6">
              <span className="text-teal-700 font-semibold text-sm uppercase tracking-wide">
                {t('about.subtitle')}
              </span>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl mt-2 mb-4 text-gray-900">
                {t('about.title')}
              </h2>
              <p className="font-rubik text-lg text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-700 flex-shrink-0" />
                  <span className="font-rubik text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-700 mb-2">20+</div>
                <div className="text-sm text-gray-600 font-medium">{t('about.carTypes')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-700 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">{t('about.carsSold')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-700 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">{t('about.yearsExperience')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

