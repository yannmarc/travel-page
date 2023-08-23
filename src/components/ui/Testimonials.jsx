import React, { Fragment } from "react";
import Headline from "./Headline";
import { iconStart, markSmith } from "../../constants/images";
import SliderButton from "./SliderButton";

const Testimonials = () => {
  return (
    <Fragment>
      <section>
        <div className="lg:max-w-[730px] lg:mx-auto px-6 xl:px-0 relative">
          <div className="">
            <Headline
              maxWidth={"auto"}
              textAlign={"center"}
              subHeading={"TESTIMONIALS"}
              heading={"Trust our clients"}
            />
            <div className="py-9">
              <span className="absolute left-4 top-[50%] lg:top-[40%] lg:left-0">
                <SliderButton>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 14.6666H10.44L17.8933 7.21325L16 5.33325L5.33333 15.9999L16 26.6666L17.88 24.7866L10.44 17.3333H26.6667V14.6666Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </SliderButton>
              </span>
              <div className="">
                <div className="">
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <img
                        src={markSmith}
                        alt="mark smith"
                        title="mark smith"
                      />
                    </div>
                    <div className="flex gap-x-4">
                      <img src={iconStart} alt="" />
                      <img src={iconStart} alt="" />
                      <img src={iconStart} alt="" />
                      <img src={iconStart} alt="" />
                      <img src={iconStart} alt="" />
                    </div>
                  </div>
                  <div className="text-center my-9">
                    <p className="text-xl font-medium mb-4">
                      <span className="text-[#5C8D96]">Mark Smith</span> /{" "}
                      <span>Travel Enthusiast</span>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore, soluta.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-3 justify-center">
                  <span className="block w-6 h-6 rounded-full bg-gray-100"></span>
                  <span className="block w-6 h-6 rounded-full bg-[#BB7DC5]"></span>
                  <span className="block w-6 h-6 rounded-full bg-gray-100"></span>
                </div>
              </div>
              <span className="absolute right-4 top-[50%] lg:top-[40%] lg:right-0">
                <SliderButton bgColor={"#7691B9"}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.33335 14.6666H21.56L14.1067 7.21325L16 5.33325L26.6667 15.9999L16 26.6666L14.12 24.7866L21.56 17.3333H5.33335V14.6666Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </SliderButton>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
