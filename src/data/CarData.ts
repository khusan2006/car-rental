import Golf6 from "../assets/golf6.jpg";
import AudiA1 from "../assets/audia1.jpg";
import Toyota from "../assets/toyotacamry.jpg";
import Bmw320 from "../assets/bmw320.jpg";
import Benz from "../assets/benz.jpg";
import Passat from "../assets/passatcc.jpg";
import MainGolf6 from "../assets/golf6-box.png";
import MainAudiA1 from "../assets/audi-box.png";
import MainToyota from "../assets/toyota-box.png";
import MainBmw320 from "../assets/bmw-box.png";
import MainBenz from "../assets/benz-box.png";
import MainPassat from "../assets/passat-box.png";
import { CarData } from "@/lib/types";

export const CAR_DATA: CarData[] = [
  {
    name: "VW Golf 6",
    price: "37",
    img: Golf6,
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    mainImg: MainGolf6,
  },

  {
    name: "Audi A1 S-Line",
    price: "45",
    img: AudiA1,
    model: "Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
    mainImg: MainAudiA1,
  },

  {
    name: "Toyota Camry",
    price: "30",
    img: Toyota,
    model: "Camry",
    mark: "Toyota",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Hybrid",
    mainImg: MainToyota,
  },

  {
    name: "BMW 320 ModernLine",
    price: "35",
    img: Bmw320,
    model: "BMW 320",
    mark: "BMW",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    mainImg: MainBmw320,
  },

  {
    name: "Mercedes-Benz GLK",
    price: "50",
    img: Benz,
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    mainImg: MainBenz,
  },

  {
    name: "VW Passat CC",
    price: "25",
    img: Passat,
    model: "Passat CC",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    mainImg: MainPassat,
  },
];

export const carNames = [
  "VW Golf 6",
  "Audi A1 S-Line",
  "Toyota Camry",
  "BMW 320 ModernLine",
  "Mercedes-Benz GLK",
  "VW Passat CC",
];
