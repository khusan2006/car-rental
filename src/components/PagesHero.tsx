import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const PagesHero = ({name}: {name: string}) => {
  return (
    <div className="h-[55vh] flex flex-col relative">
      <div className="bg-[url(assets/heroes-bg.png)] w-full h-full absolute top-0 right-0 z-[-2]"></div>
      <div className="w-full h-full top-0 left-0 absolute bg-white/90 z-[-1]"></div>
      <Navbar />
      <ResponsiveNavbar />
      <div className="flex flex-col gap-2 justify-center px-6 z-10 flex-1">
        <h4 className="font-poppins text-3xl font-bold capitalize ">{name}</h4>
        <h6 className="font-poppins text-xl font-medium capitalize">Home/{name}</h6>
      </div>
    </div>
  );
};

export default PagesHero;
