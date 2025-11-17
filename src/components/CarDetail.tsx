import { CarData } from "@/lib/types";
import { Button } from "./ui/button";
import { Users, Settings, Fuel, Calendar, Wind, Car, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";

type CarDetailProps = {
  car: CarData;
};

const CarDetail = ({ car }: CarDetailProps) => {
  const { t } = useTranslation();
  const {
    img,
    name,
    price,
    model,
    mark,
    year,
    doors,
    air,
    transmission,
    fuel,
  } = car;

  const features = [
    { icon: Tag, label: t('carDetail.model'), value: model },
    { icon: Car, label: t('carDetail.brand'), value: mark },
    { icon: Calendar, label: t('carDetail.year'), value: year },
    { icon: Users, label: t('carDetail.doors'), value: doors },
    { icon: Wind, label: t('carDetail.ac'), value: air },
    { icon: Settings, label: t('carDetail.transmission'), value: transmission },
    { icon: Fuel, label: t('carDetail.fuel'), value: fuel },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[500px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              className="w-full h-full max-h-[600px] object-contain rounded-lg"
              src={img}
              alt={name}
            />
            {/* Price Badge */}
            <div className="absolute top-4 right-4 bg-teal-700 text-white px-6 py-3 rounded-full shadow-lg z-10">
              <div className="text-sm font-medium">{t('carDetail.startingAt')}</div>
              <div className="text-3xl font-bold">${price}K</div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-2">
              {name}
            </h2>
            <p className="text-lg text-gray-600">
              {mark} • {model} • {year}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-teal-400 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-teal-400 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-teal-700" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {feature.label}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 ml-11">
                    {feature.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Price Section */}
          <div className="bg-gradient-to-r from-teal-100 to-teal-400 rounded-xl p-6 mb-6 border border-teal-400">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-teal-700">${price}K</span>
              <span className="text-gray-600">{t('carDetail.startingPrice')}</span>
            </div>
            <p className="text-sm text-gray-600">
              {t('carDetail.financingNote')}
            </p>
          </div>

          {/* CTA Button */}
          <Button className="w-full text-lg py-6 bg-teal-700 hover:bg-teal-700">
            {t('carDetail.contactSalesTeam')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
