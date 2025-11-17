import { FC } from "react";
import { CheckCircle2, Phone, Car } from "lucide-react";
import { useTranslation } from "react-i18next";

const Plan: FC = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: Car,
      title: t('plan.step1.title'),
      description: t('plan.step1.description'),
      number: "01"
    },
    {
      icon: Phone,
      title: t('plan.step2.title'),
      description: t('plan.step2.description'),
      number: "02"
    },
    {
      icon: CheckCircle2,
      title: t('plan.step3.title'),
      description: t('plan.step3.description'),
      number: "03"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <span className="text-teal-700 font-semibold text-sm uppercase tracking-wide">
            {t('plan.subtitle')}
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mt-2 mb-4 text-gray-900">
            {t('plan.title')}
          </h2>
          <p className="font-rubik text-lg text-gray-600 max-w-2xl mx-auto">
            {t('plan.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 bg-teal-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="bg-teal-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="h-10 w-10 text-teal-700" />
                </div>

                {/* Content */}
                <h3 className="font-poppins text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="font-rubik text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-teal-400 transform -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-teal-700 rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plan;

