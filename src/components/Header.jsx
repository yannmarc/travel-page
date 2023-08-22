import React, { Fragment } from "react";
import { geoLocation, heroCardOne, heroCardThree, heroCardTwo, locationPng, mapLocation, travelingBag, user } from "../constants/images";
import ButtonCTA from "./ui/ButtonCTA";

const Header = () => {
  return (
    <Fragment>
      <header className="overflow-hidden">
        <div className="lg:flex lg:items-center lg:max-w-[1100px] lg:mx-auto px-6 xl:px-0">
          <div className="lg:w-[35%]">
            <div className="flex px-[14px] text-[#5C8D96] py-[10px] gap-x-3 bg-white shadow-lg w-fit rounded-[100px]">
              <span className="block font-semibold ">Explore the world!</span>
              <span className="block">
                <img
                  src={travelingBag}
                  alt="the icon that illustrates the traveling bag"
                />
              </span>
            </div>
            <div className="mt-5">
              <h1 className="text text-[55px]">Travel <span className="text-[#5C8D96]">top destination</span> of the world!</h1>
              <p className="text-xl my-[37px] text-[#828282]">We always make our customer happy by providing as many choices as possible</p>
              <div className="my-[37px]">
                <ButtonCTA text={"Get Started"} bgColor={"#7691B9"} textColor={"#FFFFFF"}/>
                <ButtonCTA text={"Watch a demo"} bgColor={"#FFFFFF"} textColor={"#000000"} />
              </div>
            </div>
          </div>
          <div className="relative my-[120px] lg:w-[65%]">
            <div className="relative z-10 flex items-center gap-x-6 lg:justify-end lg:items-center lg:gap-x-[52px]">
                <div className="flex flex-col gap-y-8">
                    <img src={heroCardOne} alt="palm trees" className="block w-[200px] h-[200px] lg:w-[initial] lg:h-[initial]" />
                    <img src={heroCardTwo} alt="happy man on a boat" className="block w-[200px] h-[200px] lg:w-[initial] lg:h-[initial]"/>
                </div>
                <img src={heroCardThree} alt="camels taking a picture with a man in a dessert" className="block w-[240px] h-[340px] lg:w-[initial] lg:h-[initial]" />
            </div>

            <div className="absolute top-[-100px] right-[-140px]">
                <img src={mapLocation} alt="map of the world" />
            </div>
            <div className="small-pngs">
                <span className="absolute right-0 top-[65%] z-10 p-[14px] bg-white rounded-[100px] flex items-center gap-x-3 shadow-lg w-fit">
                    <img src={geoLocation} alt="geo location pngs" />
                    <span className="font-medium">Top Places</span>
                </span>
                <span className="absolute lg:bottom-[-48px] z-10 left-[50%] lg:left-[60%]">
                    <img src={user} alt="png of a user" />
                </span>
                <span className="absolute top-[50%] lg:top-[40%] z-10 lg:left-[22%]"><img src={locationPng} alt="" /></span>
            </div>
          </div>
          
          <span className="big-circle"></span>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
