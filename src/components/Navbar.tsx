import { FC } from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar: FC = () => {
  const { loginWithRedirect, user, logout } = useAuth0();
  return (
    <header className="hidden lg:flex justify-between items-center pt-6 px-6">
      <img src={logo} alt="logo" className="w-42 h-12" />
      <nav className="">
        <ul className="flex  gap-6 font-rubik text-[1.125rem] font-medium capitalize">
          <li>
            <a className="hover:text-orange-600" href="">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-orange-600" href="">
              about
            </a>
          </li>
          <li>
            <a className="hover:text-orange-600" href="">
              vehicle models
            </a>
          </li>
          <li>
            <a className="hover:text-orange-600" href="">
              testimonials
            </a>
          </li>
          <li>
            <a className="hover:text-orange-600" href="">
              our team
            </a>
          </li>
          <li>
            <a className="hover:text-orange-600" href="">
              contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex">
        {user ? (
          <div className="flex items-center gap-2">
            <Button size={"lg"} onClick={() => logout()}>
              Log out
            </Button>
            <p className="font-rubik text-[1.125rem] font-medium capitalize">Welcome {user.nickname}!</p>
            
          </div>
        ) : (
          <>
            <Button
              variant={"link"}
              size={"lg"}
              className="font-bold text-[1.125rem]"
              onClick={() => loginWithRedirect()}
            >
              Sign in
            </Button>
            <Button size={"lg"} onClick={() => loginWithRedirect()}>
              Register
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
