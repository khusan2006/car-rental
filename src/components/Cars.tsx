import { FC, useState } from "react";
import { Button } from "./ui/button";
import CarDetail from "./CarDetail";
import { CAR_DATA } from "../data/CarData";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Cars: FC = () => {
  const [currentCar, setCurrentCar] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const handleClick = (index: number) => {
    setCurrentCar(index)
  }
  
  return (
    <section id="models" className="px-6 pb-32">
      <div className="flex flex-col items-center">
        <h3 className="font-rubik text-2xl font-medium pb-2">{t('cars.subtitle')}</h3>
        <h4 className="font-poppins font-bold text-[2.7rem] pb-2 text-center">
          {t('cars.title')}
        </h4>
        <p className="font-rubik text-base font-normal text-gray-700 md:w-full w-full sm:w-[65%] text-center ">
          {t('cars.description')}
        </p>
        <Button 
          className="mt-6" 
          size="lg"
          onClick={() => navigate("/cars")}
        >
          {t('cars.seeAllCars')} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="flex mt-10 gap-16 lg:flex-row flex-col ">
        <div className="flex flex-col flex-1 gap-3">
          {CAR_DATA.slice(0, 6).map((car, index) => (
            <Button
              key={index}
              variant={"secondary"}
              size={"lg"}
              className={`px-12 py-[2.2rem] text-xl font-poppins font-semibold ${currentCar === index ? 'bg-teal-700 text-white' : ''}`}
              onClick={() => handleClick(index)}
            >
              {car.name}
            </Button>
          ))}
        </div>
        <div className="flex-[4]">
          <CarDetail car={CAR_DATA[currentCar]} />
        </div>
      </div>
    </section>
  );
};

export default Cars;
