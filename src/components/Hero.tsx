import  { FC } from 'react'
import { Button } from './ui/button';
import heroCar from '../assets/main-car.png';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <section className='px-6 flex-col-reverse md:flex-row flex items-center font-rubik min-h-[95vh]'>
      <div className='flex flex-col justify-center items-center md:items-start pb-8 lg:flex-3'>
        <h3 className='font-bold text-2xl mb-2'>{t('hero.subtitle')}</h3>
        <h1 className='font-bold text-[2.8rem]/[60px] sm:text-[3.6rem]/[65px] font-poppins mb-4 text-center md:text-start'>
        {(() => {
          const title = t('hero.title');
          const bigWord = t('hero.big');
          const parts = title.split('big');
          return parts.length > 1 ? (
            <>
              {parts[0]}
              <span className='text-teal-600'>{bigWord}</span>
              {parts[1]}
            </>
          ) : title;
        })()}
        </h1>
        <p className='font-normal text-base text-gray-600 mb-6 w-[90%] sm:w-[70%] text-center md:w-[100%] md:text-start'>
        {t('hero.description')}
        </p>
        <div className='flex gap-4'>
          <Button 
            size={'lg'}
            onClick={() => navigate('/cars')}
          >
            {t('hero.browseCars')} <CheckCircle2 className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant={'secondary'} 
            size={'lg'}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('hero.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className='lg:flex-2'>
        <img className='w-full md:h-4/5 lg:h-auto lg:w-[80rem]' src={heroCar} alt="picture of car" />
      </div>
    </section>
  )
}

export default Hero
