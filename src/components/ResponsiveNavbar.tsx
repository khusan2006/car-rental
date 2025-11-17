import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  const handleClick = () => {
    setIsMenuOpen(false);
  };
  
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleClick();
    if (location.pathname === '/') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };
  return (
    <header
      className={`flex relative lg:hidden justify-between py-4 px-8 sm:px-14 items-center`}
    >
      <a 
        href="/"
        onClick={handleHomeClick}
        className="cursor-pointer"
      >
        <img src={logo} alt="logo" className="w-42 h-12" />
      </a>

      <Menu color="#000" onClick={() => setIsMenuOpen(true)} />
      <div
        className={`${
          isMenuOpen ? "translate-x-[0]" : "translate-x-[-100%]"
        } transition-all duration-500 fixed z-[100] h-screen w-screen left-0 top-0 flex flex-col items-center justify-center bg-white`}
      >
        <X
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-10"
          size={"50px"}
        />
        <nav className="">
          <ul className="flex flex-col items-center mb-6 gap-6 font-rubik text-[1.125rem] font-medium capitalize">
            <li>
              <a 
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                  if (location.pathname === '/') {
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/');
                  }
                }}
                className="cursor-pointer"
              >
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer"
              >
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a 
                href="#models" 
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                  document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer"
              >
                {t('nav.vehicleModels')}
              </a>
            </li>
            <li>
              <a 
                href="/cars" 
                onClick={handleClick}
                className="cursor-pointer"
              >
                {t('nav.carCollection')}
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer"
              >
                {t('nav.testimonials')}
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                  document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer"
              >
                {t('nav.ourTeam')}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer"
              >
                {t('nav.contact')}
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
