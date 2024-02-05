import { Phone } from "lucide-react";

const PagesBanner = () => {
  return (
    <div className=" text-white  gap-8 py-24 flex justify-center items-center relative">
      <div className="bg-[url(assets/book-banner.png)] bg-cover bg-left-bottom bg-no-repeat w-full h-full absolute right-0 left-0 z-[-2]"></div>
      <div className="w-full h-full top-0 left-0 absolute bg-white/15 z-[-1]"></div>

      <div className="text-4xl font-bold font-poppins">
        Book a car by getting in touch with us
      </div>
      <div className="flex items-center text-4xl text-orange-600 font-bold font-poppins">
        <Phone className="mr-3"  />
        (123) 456-7869
      </div>
    </div>
  );
};

export default PagesBanner;
