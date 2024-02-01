import { useState } from "react";
import FormComponent from "./FormComponent";
import ConfirmAlert from "./ConfirmAlert";


const BookCar = () => {
 const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false)
  return (
    <section className="flex justify-center px-6 pt-6 font-poppins">
      <div className="w-full shadow-lg bg-white pb-20 p-12 rounded-md bg-[url(assets/book-bg.png)]">
        <h4 className="font-poppins font-bold text-2xl">Book a car</h4>
        <FormComponent setIsAlertOpen={setIsAlertOpen} />
        <ConfirmAlert isAlertOpen={isAlertOpen} />
      </div>
    </section>
  );
};

export default BookCar;
