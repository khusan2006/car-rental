import { TeamData } from "@/lib/types";

const TeamCard = ({ person }: { person: TeamData }) => {
  const { img, name, position } = person;
  return (
    <div className="rounded-md overflow-hidden shadow-md">
      <img src={img} alt={name} className="w-full" />
        <div className="flex flex-col items-center px-8 py-6">
        <h5 className="font-poppins font-bold text-2xl">{name}</h5>
      <h6 className="font-poppins text-gray-600 text-[1.125rem] font-medium">{position}</h6>
        </div>
    </div>
  );
};

export default TeamCard;
