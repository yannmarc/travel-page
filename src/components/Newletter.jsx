import React, { Fragment } from "react";
import Headline from "./ui/Headline";
import { iconMail } from "../constants/images";

const Newletter = () => {
  return (
    <Fragment>
      <section className="px-6 lg:px-0">
        <div className="lg:max-w-[825px] lg:mx-auto px-8 lg:px-16 py-16 lg:py-32 bg-[#7691B9] bg-opacity-10 rounded-2xl lg:rounded-s-3xl">
          <div className="">
            <Headline
              subHeading={"SUBSCRIBE TO OUR NEWSLETTER"}
              heading={
                "Prepare yourself & let’s explore the beauty of the world"
              }
              textAlign={"center"}
              maxWidth={"auto"}
            />

            <div className="flex lg:flex-row flex-col gap-x-16">
              <span className="flex w-full bg-white rounded-xl lg:rounded-3xl p-4 lg:p-8 gap-x-6 focus:outline-0 border-none">
                <img src={iconMail} alt="the mail icon" />
                <input type="email" name="user_email" placeholder="Your mail"  className="focus:outline-0 border-none caret-slate-400"/>
              </span>
              <button type="submit" className="p-4 lg:p-8 bg-[#7691B9] text-white w-full rounded-xl mt-2 lg:w-1/4">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Newletter;
