import { Mail, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-20 px-6 grid sm:grid-cols-2  md:grid-cols-4 gap-16">
      <div>
        <h5 className="font-poppins text-2xl font-bold mb-4" >
          {t('footer.companyName')} <span className="font-normal"> {t('footer.rental')}</span>
        </h5>
        <p className="font-poppins text-base font-normal text-gray-600 mb-6">
          {t('footer.description')}
        </p>
        <a className="flex items-center font-rubik text-base font-medium mb-3" href="tel:123456789">
          <PhoneCall /> &nbsp; (123) -456-789
        </a>
        <a className="flex items-center font-rubik text-base font-medium"
          href="mailto: 
                carrental@gmail.com"
        >
          <Mail />
          &nbsp; carrental@gmail.com
        </a>
        <p className="font-poppins text-[0.9rem] font-normal mt-3">{t('footer.designBy')}</p>
      </div>
      <div>
        <h5 className="font-poppins text-2xl font-bold mb-4" >{t('footer.company')}</h5>
        <ul className="flex flex-col gap-2">
          <li>
            <p className="font-poppins text-base font-normal">{t('footer.newYork')}</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">{t('footer.careers')}</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">{t('footer.mobile')}</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">{t('footer.blog')}</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">{t('footer.howWeWork')}</p>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-poppins text-2xl font-bold mb-4" >{t('footer.workingHours')}</h5>
        <ul className="flex flex-col gap-2">
          <li>
            <p className="font-poppins text-base font-normal">{t('footer.monFri')}</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">{t('footer.sat')}</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">{t('footer.sun')}</p>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-poppins text-2xl font-bold mb-4" >{t('footer.subscription')}</h5>
        <p className="font-poppins text-base font-normal mb-3">{t('footer.subscribeText')}</p>
        <form>
          <Input placeholder={t('footer.emailPlaceholder')} />
          <Button className="w-full mt-3">{t('footer.submit')}</Button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
