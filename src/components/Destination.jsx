import React, { Fragment } from "react";
import Headline from "./ui/Headline";
import SliderButton from "./ui/SliderButton";
import { destinations } from "../constants/data";
import Cards from "./ui/Cards";

const Destination = () => {
  return (
    <Fragment>
      <section>
        <div className="py-[137.5px] lg:max-w-[1100px] lg:mx-auto px-6 xl:px-0">
          <div className="text flex items-center justify-between py-[27.5px] gap-x-4">
            <Headline
              subHeading={"TOP DESTINATION"}
              heading={"Explore top destination"}
            />
            <div className="flex gap-x-4 ">
              <SliderButton bgColor={"#7691B9"}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6667 14.6666H10.44L17.8933 7.21325L16 5.33325L5.33333 15.9999L16 26.6666L17.88 24.7866L10.44 17.3333H26.6667V14.6666Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </SliderButton>
              <SliderButton bgColor={"#FFFFFF"}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.33335 14.6666H21.56L14.1067 7.21325L16 5.33325L26.6667 15.9999L16 26.6666L14.12 24.7866L21.56 17.3333H5.33335V14.6666Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </SliderButton>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:justify-between lg:items-center my-[21px]">
            {
                destinations.map((destination) => (
                    <Cards price={destination.price} rating={destination.rate} country={destination.country} location={destination.location} placeHolder={destination.placeHolder} />
                ))
            }
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Destination;
