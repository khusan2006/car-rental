import { CarData } from "@/lib/types";
import Star from "@/assets/star-outline.svg";
import { Car } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
const CarsCard = ({ car }: { car: CarData }) => {
  const { mainImg, name, model, price, transmission, doors, fuel } = car;
  return (
    <div className="rounded-md overflow-hidden h-[content-fit]">
      <img src={mainImg} alt={name} className="h-[45%] w-full" />
        <div className="px-[1.9rem] py-[1.2rem] border-[0.5px] border-gray-500" style={{'borderBottomLeftRadius': 'calc(var(--radius) - 2px);', 'borderBottomRightRadius': 'calc(var(--radius) - 2px);'}}>
        <div className="flex justify-between font-poppins text-3xl font-bold mt-3">
        <h5>{model}</h5>
        <p>${price}</p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex">
          {Array.from({ length: 5 }, () => (
            <img src={Star} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <p className="font-poppins font-base text-gray-600">per day</p>
      </div>
      <div className="flex justify-between mt-6 font-poppins text-gray-600 font-medium text-xl">
        <h5 className="flex gap-2">
          <Car />
          {name}
        </h5>
        <h5 className="flex gap-2">
          {doors}
          <Car />
        </h5>
      </div>
      <div className="flex justify-between mt-4 font-poppins text-gray-600 font-medium text-xl">
        <h5 className="flex gap-2">
          <Car />
          {transmission}
        </h5>
        <h5 className="flex gap-2">
          {fuel}
          <Car />
        </h5>
      </div>
      <Separator className="my-6 bg-gray-600" />
      <Button className="w-full">
        Reserve now
      </Button>
        </div>
    </div>
  );
};

export default CarsCard;
