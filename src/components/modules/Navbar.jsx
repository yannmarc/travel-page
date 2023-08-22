import React, { Fragment } from "react";
import ButtonCTA from "../ui/ButtonCTA";
import { navLinks } from "../../constants/data";
import { Link } from "react-router-dom";
import { logo } from "../../constants/images";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="relative">
        <div className="lg:flex lg:gap-x-[99px] lg:justify-between lg:max-w-[1130px] lg:mx-auto lg:px-6 xl:px-0 lg:w-full py-5">
          <div className="logo">
            <img src={logo} alt="travel landing page logo" />
          </div>
          <div className="absolute translate-x-[-100vw] h-screen bg-black bg-opacity-30 w-full lg:h-[initial] bg-[initial] lg:relative lg:translate-x-0">
            <div className="w-[75%] bg-white h-full py-8 px-6 lg:px-0 lg:w-full lg:py-0 lg:justify-between lg:flex lg:items-center lg:gap-x-[99px]">
              <ul className="flex flex-col gap-y-8 lg:flex-row lg:gap-y-0 lg:gap-x-[50px]">
                {navLinks.map((link) => (
                  <Link key={link} to={"#"} className="text-xl">
                    {link}
                  </Link>
                ))}
              </ul>
              <div className="flex py-8 lg:flex-row lg:py-0 lg:justify-end">
                <ButtonCTA
                  bgColor={"#FFFFFF"}
                  textColor={"#7691B9"}
                  path={"/"}
                  text={"Login"}
                />
                <ButtonCTA
                  bgColor={"#7691B9"}
                  textColor={"#FFFFFF"}
                  text={"Sign UP"}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
