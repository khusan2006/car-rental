import { TeamData } from "@/lib/types";
import { Linkedin, Mail } from "lucide-react";

const TeamCard = ({ person }: { person: TeamData }) => {
  const { img, name, position } = person;
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Social Icons on Hover */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors cursor-pointer">
            <Linkedin className="h-4 w-4 text-teal-700" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors cursor-pointer">
            <Mail className="h-4 w-4 text-teal-700" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h5 className="font-poppins font-bold text-2xl text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
          {name}
        </h5>
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-8 bg-teal-700 rounded-full"></div>
          <h6 className="font-poppins text-gray-600 text-lg font-medium">
            {position}
          </h6>
          <div className="h-1 w-8 bg-teal-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

