import  { FC } from 'react'
import { Button } from './ui/button';
import heroCar from '../assets/main-car.png';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section className='px-6 flex pt-8 font-rubik'>
      <div className='flex flex-col justify-center pb-8 flex-3'>
        <h3 className='font-bold text-2xl mb-2'>Plan your trip now</h3>
        <h1 className='font-bold text-[3.6rem]/[65px] font-poppins mb-4'>
        Save <span className='text-orange-600'>big</span> with our car rental
        </h1>
        <p className='font-normal text-base text-gray-600 mb-6'>
        Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
        </p>
        <div className='flex gap-4'>
          <Button size={'lg'}>
            Book ride <CheckCircle2 className="ml-2 h-4 w-4" />
          </Button>
          <Button variant={'secondary'} size={'lg'}>
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className='flex-2'>
        <img className='w-[80rem]' src={heroCar} alt="picture of car" />
      </div>
    </section>
  )
}

export default Hero
