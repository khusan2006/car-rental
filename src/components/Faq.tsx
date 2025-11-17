import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[url('assets/car.png')] bg-no-repeat bg-left-bottom">
      <div className="flex flex-col items-center">
        <h3 className="font-rubik text-2xl font-medium pb-2">{t('faq.subtitle')}</h3>
        <h4 className="font-poppins font-bold  text-center md:text-start text-[2rem] sm:text-[2.4rem] md:text-[2.7rem] pb-2">
          {t('faq.title')}
        </h4>
        <p className="font-rubik text-base font-normal text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] text-center">
          {t('faq.description')}
        </p>
      </div>
      <div className="mt-10 flex justify-center ">
        <Accordion className="bg-white w-full sm:w-[90%] md:w-[75%] lg:w-[50%] shadow-lg z-10" type="single" collapsible>
          <AccordionItem className='px-10 py-2' value="item-1">
            <AccordionTrigger className="font-poppins font-medium text-[1.125rem]">
              {t('faq.q1')}
            </AccordionTrigger>
            <AccordionContent className="p-3 font-rubik text-base font-normal text-gray-700">
              {t('faq.a1')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='px-10 py-2' value="item-2">
            <AccordionTrigger className="font-poppins font-medium text-[1.125rem]">
              {t('faq.q2')}
            </AccordionTrigger>
            <AccordionContent className="p-3 font-rubik text-base font-normal text-gray-700">
              {t('faq.a2')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='px-10 py-2' value="item-3">
            <AccordionTrigger className="font-poppins font-medium text-[1.125rem]">
              {t('faq.q3')}
            </AccordionTrigger>
            <AccordionContent className="p-3 font-rubik text-base font-normal text-gray-700">
              {t('faq.a3')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
