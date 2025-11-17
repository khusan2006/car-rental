import { FC } from "react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };
  
  return (
    <header className="hidden lg:flex justify-between items-center pt-6 px-6">
      <a 
        href="/"
        onClick={handleHomeClick}
        className="cursor-pointer flex items-center"
      >
        <img src={logo} alt="logo" className="w-44 h-20 object-contain" />
      </a>
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-6 font-rubik text-[1.125rem] font-medium capitalize">
          <li>
            <a 
              href="/"
              className="hover:text-teal-700 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
            >
              {t('nav.home')}
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="hover:text-teal-700 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a 
              href="#models" 
              className="hover:text-teal-700 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.vehicleModels')}
            </a>
          </li>
          <li>
            <a 
              href="/cars" 
              className="hover:text-teal-700 cursor-pointer"
            >
              {t('nav.carCollection')}
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className="hover:text-teal-700 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.testimonials')}
            </a>
          </li>
          <li>
            <a 
              href="#team" 
              className="hover:text-teal-700 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.ourTeam')}
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:text-teal-700 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.contact')}
            </a>
          </li>
        </ul>
      </nav>
      <div className="w-[200px] flex justify-end">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
