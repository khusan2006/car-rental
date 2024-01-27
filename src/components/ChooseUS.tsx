import MainImg from "../assets/main.png";
import FirstIcon from "../assets/icon1 (1).png";
import SecondIcon from "../assets/icon2 (1).png";
import ThirdIcon from "../assets/icon3 (1).png";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const ChooseUS = () => {
  return (
    <section className="flex flex-col items-center mt-20">
      <div className="w-[80vw]">
        <img className="w-full" src={MainImg} alt="picture of cars" />
      </div>
      <div className=" w-[80vw] mt-6 flex gap-[8.5rem]">
        <div className="flex-1">
          <h6 className="font-rubik font-semibold text-[1.4rem]">Why Choose Us</h6>
          <h3 className="font-poppins font-bold text-[2.6rem]/[1.3]">Best valued deals you will ever find</h3>
          <p className="font-rubik text-base text-gray-600 font-normal mt-4 mb-6">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <Button className="flex items-center" size={'lg'}>
            Find Details <ArrowRight className="ml-2" />
          </Button>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <div className='flex gap-3' >
            <img src={FirstIcon} alt="icon" />
            <div>
              <h5 className="font-poppins font-bold text-2xl">Cross Country Drive</h5>
              <p className="font-rubik font-normal text-gray-600 text-base mt-2">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className='flex gap-3' >
            <img src={SecondIcon} alt="icon" />
            <div>
              <h5 className="font-poppins font-bold text-2xl">All Inclusive Pricing</h5>
              <p className="font-rubik font-normal text-gray-600 text-base mt-2">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className='flex gap-3' >
            <img src={ThirdIcon} alt="icon" />
            <div>
              <h5 className="font-poppins font-bold text-2xl">No Hidden Charges</h5>
              <p className="font-rubik font-normal text-gray-600 text-base mt-2">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUS;
