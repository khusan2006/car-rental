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
    <section className='px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-10 font-rubik min-h-[70vh] pt-12'>
      <div className='flex flex-col justify-center items-center lg:items-start pb-8 lg:flex-1 max-w-2xl text-center lg:text-left'>
        <h3 className='font-bold text-2xl sm:text-3xl mb-2'>{t('hero.subtitle')}</h3>
        <h1 className='font-bold text-4xl leading-tight sm:text-[3rem]/[1.2] lg:text-[3.5rem]/[1.2] font-poppins mb-4'>
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
        <p className='font-normal text-base sm:text-lg text-gray-600 mb-6 w-full sm:w-[85%] lg:w-full'>
        {t('hero.description')}
        </p>
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
          <Button 
            size={'lg'}
            className='w-full sm:w-auto'
            onClick={() => navigate('/cars')}
          >
            {t('hero.browseCars')} <CheckCircle2 className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant={'secondary'} 
            size={'lg'}
            className='w-full sm:w-auto'
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('hero.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className='lg:flex-1 w-full flex justify-center'>
        <img className='w-full max-w-[520px] h-auto object-contain drop-shadow-2xl' src={heroCar} alt="picture of car" />
      </div>
    </section>
  )
}

export default Hero
