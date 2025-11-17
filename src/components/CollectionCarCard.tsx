import { CarData } from "@/lib/types";
import { Car, Fuel, Settings, Users, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const CollectionCarCard = ({ car }: { car: CarData }) => {
  const { t } = useTranslation();
  const { img, name, model, price, transmission, doors, fuel, year, mark } = car;
  
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 right-4 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${price}K
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Brand */}
        <div className="mb-4">
          <h3 className="text-xl font-bold font-poppins text-gray-900 mb-1">
            {model}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            {mark} • {year}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="h-4 w-4 text-teal-700" />
            <span className="text-sm font-medium">{doors}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Settings className="h-4 w-4 text-teal-700" />
            <span className="text-sm font-medium">{transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Fuel className="h-4 w-4 text-teal-700" />
            <span className="text-sm font-medium">{fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4 text-teal-700" />
            <span className="text-sm font-medium">{year}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4" />

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-teal-700">${price}K</p>
            <p className="text-xs text-gray-500">{t('carDetail.startingPrice')}</p>
          </div>
          <Button className="bg-teal-700 hover:bg-teal-700 text-white">
            {t('collection.viewDetails')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCarCard;

