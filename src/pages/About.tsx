import PagesHero from "@/components/PagesHero";
import Icon1 from "@/assets/icon1.png";
import Icon2 from "@/assets/icon2.png";
import Icon3 from "@/assets/icon3.png";
import MainImg from "@/assets/about-main.jpg";
import Plan from "@/components/Plan";
const About = () => {
  return (
    <section className="flex flex-col ">
      <PagesHero name="about" />
      <div className="flex w-[80vw] self-center mt-20">
        <div className="flex-1">
          <img src={MainImg} alt="main image" />
        </div>
        <div className="flex-1">
          <h3 className="font-poppins font-semibold text-2xl mb-3">
            About Company
          </h3>
          <h6 className="font-poppins font-bold text-4xl">
            You start the engine and your adventure begins
          </h6>
          <p className="font-rubik text-[1.125rem] text-gray-600 mt-4">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="flex mt-8 gap-6">
            <div className="flex-1 flex gap-3 flex-col">
              <img src={Icon1} alt="icon" className="w-20 h-12" />
              <div className="font-medium font-poppins text-base flex flex-wrap flex-col">
                <span className="font-popins font-bold text-5xl">20</span>
                <div className="flex flex-wrap">Car types</div>
              </div>
            </div>
            <div className="flex-1  gap-3 flex-col flex ">
              <img src={Icon2} alt="icon" className="w-20 h-12" />
              <div className="font-medium font-poppins text-base flex flex-wrap flex-col">
                <span className="font-popins font-bold text-5xl">85</span>
                <div className="flex flex-wrap"> Rental Outlets</div>
              </div>
            </div>
            <div className="flex-1 flex gap-3 flex-col">
              <img src={Icon3} alt="icon" className="w-20 h-12" />
              <div className="font-medium font-poppins text-base flex flex-wrap flex-col">
                <span className="font-popins font-bold text-5xl">75</span>
                <div className="flex flex-wrap">Repair shops</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Plan /> 
    </section>
  );
};

export default About;
