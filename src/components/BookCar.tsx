import BookForm from "./BookForm";
import ConfirmAlert from "./ConfirmAlert";
import BookCarProvider from "@/context/BookCarContext";

const BookCar = () => {
  return (
    <BookCarProvider>
      <section className="flex justify-center px-6 pt-6 font-poppins">
        <div className="w-full shadow-lg bg-white pb-20 p-12 rounded-md bg-[url(assets/book-bg.png)]">
          <h4 className="font-poppins font-bold text-2xl">Book a car</h4>
          <BookForm />
          <ConfirmAlert />
        </div>
      </section>
    </BookCarProvider>
  );
};

export default BookCar;
