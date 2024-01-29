import GooglePlay from '../assets/googleapp.svg';
import AppStore from '../assets/appstore.svg';


const Download = () => {
  return (
    <section className='bg-gray-100 flex px-6 bg-[url(assets/bg02.png)] bg-right-center bg-cover'>
      <div className='flex-[2] py-20'>
        <h5 className='font-poppins font-bold text-[2.7rem] pb-2'>Download our app to get most out of it</h5>
        <p className='font-poppins text-base font-normal text-gray-700 '>
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className='flex mt-10 gap-8'>
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
