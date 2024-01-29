import FirstImage from "../assets/pfp1.jpg";
import SecondImage from "../assets/pfp2.jpg";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 px-6 md:px-0 py-20 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h3 className="font-rubik text-2xl font-medium pb-2">
          Reviewed by People
        </h3>
        <h4 className="font-poppins font-bold text-[2rem] sm:text-[2.7rem] pb-2">
          Client's Testimonials
        </h4>
        <p className="font-rubik text-base font-normal text-gray-700 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] text-center">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="flex md:w-[80%] flex-col md:flex-row gap-8 mt-12 ">
        <div className="bg-white p-12 md:p-16 flex-1">
          <h4 className="font-poppins font-medium text-[1.4rem]">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </h4>
          <div className="flex mt-6 gap-4 items-center">
            <img
              className="w-20 aspect-square rounded-full"
              src={FirstImage}
              alt="person"
            />
            <div>
              <h6 className="font-poppins font-bold text-[1.125rem]">Parry Hotter</h6>
              <p className="font-rubik font-normal text-gray-600">Belgrade</p>
            </div>
          </div>
        </div>
        <div className="bg-white  p-12 md:p-16 flex-1">
          <h4 className="font-poppins font-medium text-[1.4rem]">
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website!"
          </h4>
          <div className="flex mt-6 gap-4 items-center">
            <img
              className="w-20 aspect-square rounded-full"
              src={SecondImage}
              alt="person"
            />
            <div>
              <h6 className="font-poppins font-bold text-[1.125rem]">Ron Rizzly</h6>
              <p className="font-rubik font-normal text-gray-600">Tashkent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
