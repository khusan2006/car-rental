import { MapPin } from "lucide-react";
import { useBookCarContext } from "@/context/BookCarContext";
import { BookFormData } from "@/lib/types";
import { format } from "date-fns";
import { CAR_DATA } from "@/data/CarData";

const ConfirmDescription = () => {
  const { payload } = useBookCarContext();
  const { pickup, dropof, pickupDate, dropofDate, car } = payload as BookFormData;
  const CarImage = CAR_DATA.find(carItem => carItem.name == car)?.img;

  return (
    <div className="flex flex-col md:flex-row pt-6 px-2">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h3 className="font-poppins text-orange-600 text-xl font-bold">
          Location & Date
        </h3>
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex gap-2">
            <MapPin
              fontWeight={"700"}
              fontFamily="poppins"
              fontSize={"1.1rem"}
            />
            <div>
              <p className="text-[1.1rem] font-bold font-poppins">
                Pick-Up Date & Time
              </p>
              <p>{format(pickupDate, "PPP")}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MapPin
              fontWeight={"700"}
              fontFamily="poppins"
              fontSize={"1.1rem"}
            />
            <div>
              <p className="text-[1.1rem] font-bold font-poppins">
                Drop-Off Date & Time
              </p>
              <p className="font-popping text-gray-600">
                {format(dropofDate, "PPP")}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <MapPin
              fontWeight={"700"}
              fontFamily="poppins"
              fontSize={"1.1rem"}
            />
            <div>
              <p className="text-[1.1rem] font-bold font-poppins">
                Pick-Up Location
              </p>
              <p className="font-popping text-gray-600">{pickup}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MapPin
              fontWeight={"700"}
              fontFamily="poppins"
              fontSize={"1.1rem"}
            />
            <div>
              <p className="text-[1.1rem] font-bold font-poppins">
                Drop-Off Location
              </p>
              <p className="font-popping text-gray-600">{dropof}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start mt-6 md:mt-0">
        <h3 className="font-poppins  text-xl font-bold">
          Car - <span className="text-orange-600">{car}</span>
        </h3>
        <img src={CarImage} alt="car" />
      </div>
    </div>
  );
};

export default ConfirmDescription;
