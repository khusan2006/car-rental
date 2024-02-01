import GooglePlay from '../assets/googleapp.svg';
import AppStore from '../assets/appstore.svg';


const Download = () => {
  return (
    <section className='bg-gray-100 flex flex-col lg:flex-row px-6 bg-[url(assets/bg02.png)] bg-right-center bg-cover'>
      <div className='flex-[2] py-20 flex flex-col items-center md:items-start'>
        <h5 className='font-poppins font-bold text-[2rem] sm:text-[2.4rem] md:text-[2.7rem] pb-2 text-center md:text-start'>Download our app to get most out of it</h5>
        <p className='font-poppins text-base font-normal text-gray-700 text-center md:text-start'>
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className='flex flex-col sm:flex-row mt-10 gap-4 md:gap-8'>
            <img src={GooglePlay} alt="google play" />
            <img src={AppStore} alt="appstore" />
        </div>
      </div>
      <div className=' flex-[3]'>
      </div>
    </section>
  );
};

export default Download;
