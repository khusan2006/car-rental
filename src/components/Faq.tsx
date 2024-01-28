import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const Faq = () => {
  return (
    <section className="py-20 bg-[url('assets/car.png')] bg-no-repeat bg-left-bottom">
      <div className="flex flex-col items-center">
        <h3 className="font-rubik text-2xl font-medium pb-2">FAQ</h3>
        <h4 className="font-poppins font-bold text-[2.7rem] pb-2">
          Frequently Asked Questions
        </h4>
        <p className="font-rubik text-base font-normal text-gray-700 w-[50%] text-center">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      <div className="mt-10 flex justify-center ">
        <Accordion className="w-[50%] shadow-lg z-10" type="single" collapsible>
          <AccordionItem className='px-10 py-2' value="item-1">
            <AccordionTrigger className="font-poppins font-medium text-[1.125rem]">
              1. What is special about comparing rental car deals?
            </AccordionTrigger>
            <AccordionContent className="p-3 font-rubik text-base font-normal text-gray-700">
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='px-10 py-2' value="item-2">
            <AccordionTrigger className="font-poppins font-medium text-[1.125rem]">
              2. How do I find the car rental deals?
            </AccordionTrigger>
            <AccordionContent className="p-3 font-rubik text-base font-normal text-gray-700">
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='px-10 py-2' value="item-3">
            <AccordionTrigger className="font-poppins font-medium text-[1.125rem]">
              3. How do I find such low rental car prices?
            </AccordionTrigger>
            <AccordionContent className="p-3 font-rubik text-base font-normal text-gray-700">
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
