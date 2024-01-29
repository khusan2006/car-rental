import { FC } from "react";
import FirstIcon from "../assets/icon1 (2).png";
import SecondIcon from "../assets/icon2 (2).png";
import ThirdIcon from "../assets/icon3 (2).png";

const Plan: FC = () => {
  return (
    <section className="mt-36 flex flex-col items-center">
      <h3 className="font-rubik text-2xl font-medium pb-2">
        Plan your trip now
      </h3>
      <h4 className="font-poppins font-bold text-[2.7rem] text-center">
        Quick & easy car rental
      </h4>
      <div className="flex flex-col md:flex-row pt-12 md:pt-20 gap-12 lg:gap-24 w-[80vw]">
        <div className="flex flex-col items-center justify-center">
          <img src={FirstIcon} alt="icon" />
          <h5 className="font-poppins text-2xl font-bold mt-4">Select Car</h5>
          <p className="font-rubik text-base text-gray-600 text-center mt-2">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={SecondIcon} alt="icon" />
          <h5 className="font-poppins text-2xl font-bold mt-4">
            Contact Operator
          </h5>
          <p className="font-rubik text-base text-gray-600 text-center mt-2">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={ThirdIcon}
            alt="icon"
            className="w-[10.875rem] aspect-square"
          />
          <h5 className="font-poppins text-2xl font-bold mt-4">Let's Drive</h5>
          <p className="font-rubik text-base text-gray-600 text-center mt-2">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plan;
