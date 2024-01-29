import { FC } from "react";
import { Button } from "./ui/button";
import CarDetail from "./CarDetail";
import { CAR_DATA } from "../data/CarData";

const Cars: FC = () => {
  return (
    <section className="px-6 py-32">
      <div className="flex flex-col items-center">
        <h3 className="font-rubik text-2xl font-medium pb-2">Vehicle Models</h3>
        <h4 className="font-poppins font-bold text-[2.7rem] pb-2 text-center">
          Our rental fleet
        </h4>
        <p className="font-rubik text-base font-normal text-gray-700 md:w-full w-full sm:w-[65%] text-center ">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex mt-10 gap-16 lg:flex-row flex-col ">
        <div className="flex flex-col flex-1 gap-3">
          {CAR_DATA.map((car) => (
            <Button
              variant={"secondary"}
              size={"lg"}
              className="px-12 py-[2.2rem] text-xl font-poppins font-semibold"
            >
              {car.name}
            </Button>
          ))}
        </div>
        <div className="flex-[4]">
          <CarDetail car={CAR_DATA[0]} />
        </div>
      </div>
    </section>
  );
};

export default Cars;
