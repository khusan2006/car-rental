import { Mail, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="py-20 px-6 grid sm:grid-cols-2  md:grid-cols-4 gap-16">
      <div>
        <h5 className="font-poppins text-2xl font-bold mb-4" >
          CAR <span className="font-normal"> Rental</span>
        </h5>
        <p className="font-poppins text-base font-normal text-gray-600 mb-6">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <a className="flex items-center font-rubik text-base font-medium mb-3" href="tel:123456789">
          <PhoneCall /> &nbsp; (123) -456-789
        </a>
        <a className="flex items-center font-rubik text-base font-medium"
          href="mailto: 
                carrental@gmail.com"
        >
          <Mail />
          &nbsp; carrental@gmail.com
        </a>
        <p className="font-poppins text-[0.9rem] font-normal mt-3">Design by XpeedStudio</p>
      </div>
      <div>
        <h5 className="font-poppins text-2xl font-bold mb-4" >COMPANY</h5>
        <ul className="flex flex-col gap-2">
          <li>
            <p className="font-poppins text-base font-normal">New York</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">Careers</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">Mobile</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">Blog</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">How we work</p>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-poppins text-2xl font-bold mb-4" >WORKING HOURS</h5>
        <ul className="flex flex-col gap-2">
          <li>
            <p className="font-poppins text-base font-normal">Mon - Fri: 9:00AM - 9:00PM</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">Sat: 9:00AM - 19:00PM</p>
          </li>
          <li>
            <p className="font-poppins text-base font-normal">Sun: Closed</p>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-poppins text-2xl font-bold mb-4" >SUBSCRIPTION</h5>
        <p className="font-poppins text-base font-normal mb-3">Subscribe your Email address for latest news & updates.</p>
        <form>
          <Input placeholder="enter your email address" />
          <Button className="w-full mt-3">Submit</Button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
