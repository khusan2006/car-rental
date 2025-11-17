import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20">
      <div className="flex flex-col items-center mb-12">
        <h3 className="font-rubik text-2xl font-medium pb-2">{t('contact.title')}</h3>
        <h4 className="font-poppins font-bold text-[2.7rem] text-center">
          {t('contact.subtitle')}
        </h4>
        <p className="font-rubik text-base font-normal text-gray-700 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] text-center mt-4">
          {t('contact.description')}
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;

