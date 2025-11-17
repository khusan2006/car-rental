import TeamCard from "./TeamCard";
import { TEAM_DATA } from "@/data/TeamData";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="flex flex-col items-center mb-16 px-6">
        <h3 className="font-rubik text-2xl font-medium pb-2 text-gray-600">
          {t('team.title')}
        </h3>
        <h4 className="font-poppins font-bold text-[2.7rem] text-center text-gray-900 mb-4">
          {t('team.subtitle')}
        </h4>
        <p className="font-rubik text-base font-normal text-gray-600 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] text-center">
          {t('team.description')}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-24 max-w-7xl mx-auto">
        {TEAM_DATA.map((person, index) => (
          <TeamCard key={index} person={person} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

