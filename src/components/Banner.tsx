import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-800 text-white py-16 mt-10 px-8 md:px-20 font-poppins">
        <h2 className="text-[2.5rem] sm:text-[2.8rem] md:text-[3.2rem] text-center font-bold">{t('banner.title')}</h2>
        <h5 className="text-base sm:text-xl lg:text-2xl font-normal text-center mt-6">{t('banner.subtitle')} <span className="text-teal-600"> {t('banner.support')}</span> {t('banner.supportText')}</h5>
    </section>
  )
}

export default Banner
