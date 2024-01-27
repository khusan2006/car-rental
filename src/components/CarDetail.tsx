import { CarData } from "@/data/CarData";
import { Button } from "./ui/button";

type CarDetailProps = {
  car: CarData;
};
const CarDetail = ({ car }: CarDetailProps) => {
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
  return (
    <div className="flex gap-20">
      <div className="flex-2 flex items-center justify-center">
        <img className="w-[40rem]" src={img} alt={name} />
      </div>
      <div className="flex-1">
        <div className="py-2 px-4 bg-orange-600 text-white text-[1.2rem] font-poppins font-normal flex items-center">
          <span className="text-[1.8rem]  font-bold">${price}</span> / rent per day
        </div>
        <div className="border-[2.5px] px-4 py-2 font-poppins text-base font-normal border-gray-600 border-t-0 items-center flex gap-2 ">
          <div className="flex-1 flex justify-center">Model</div>
          <div className=" h-[1.9rem] w-[2px] bg-gray-600"></div>
          <div className="flex-1 flex justify-center">{model}</div>
        </div>
        <div className="border-[2.5px] px-4 py-2 font-poppins text-base font-normal border-gray-600 border-t-0 items-center flex gap-2 ">
          <div className="flex-1 flex justify-center">Mark</div>
          <div className=" h-[1.9rem] w-[2px] bg-gray-600"></div>
          <div className="flex-1 flex justify-center">{mark}</div>
        </div>
        <div className="border-[2.5px] px-4 py-2 font-poppins text-base font-normal border-gray-600 border-t-0 items-center flex gap-2 ">
        <div className="flex-1 flex justify-center">year</div>
          <div className=" h-[1.9rem] w-[2px] bg-gray-600"></div>
          <div className="flex-1 flex justify-center">{year}</div>
        </div>
        <div className="border-[2.5px] px-4 py-2 font-poppins text-base font-normal border-gray-600 border-t-0 items-center flex gap-2 ">
        <div className="flex-1 flex justify-center">Doors</div>
          <div className=" h-[1.9rem] w-[2px] bg-gray-600"></div>
          <div className="flex-1 flex justify-center">{doors}</div>
        </div>
        <div className="border-[2.5px] px-4 py-2 font-poppins text-base font-normal border-gray-600 border-t-0 items-center flex gap-2 ">
        <div className="flex-1 flex justify-center">AC</div>
          <div className=" h-[1.9rem] w-[2px] bg-gray-600"></div>
          <div className="flex-1 flex justify-center">{air}</div>
        </div>
        <div className="border-[2.5px] px-4 py-2 font-poppins text-base font-normal border-gray-600 border-t-0 items-center flex gap-2 ">
        <div className="flex-1 flex justify-center">Transmission</div>
          <div className=" h-[1.9rem] w-[2px] bg-gray-600"></div>
          <div className="flex-1 flex justify-center">{transmission}</div>
        </div>
        <div className="border-[2.5px] px-4 py-2 font-poppins text-base font-normal border-gray-600 border-t-0 items-center flex gap-2 ">
        <div className="flex-1 flex justify-center">Fuel</div>
          <div className=" h-[1.9rem] w-[2px] bg-gray-600"></div>
          <div className="flex-1 flex justify-center">{fuel}</div>
        </div>
        <Button className="mt-4 w-full text-xl" size={'lg'}>Reserve now</Button>
      </div>
    </div>
  );
};

export default CarDetail;
