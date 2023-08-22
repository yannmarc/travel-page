import React from "react";
import Cards from "../components/ui/Cards";
import Headline from "../components/ui/Headline";
import ButtonCTA from "../components/ui/ButtonCTA";
import SliderButton from "../components/ui/SliderButton";
import Navbar from "../components/modules/Navbar";
import { Header } from "../components";
import CategoryCard from "../components/ui/CategoryCard";
import GuideSection from "../components/GuideSection";
import Destination from "../components/Destination";
import TravelPoint from "../components/TravelPoint";
import KeyFeatures from "../components/KeyFeatures";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Headline */}
      <Header />
      <GuideSection />
      <Destination />
      <TravelPoint />
      <KeyFeatures />
      <Cards />
      <Headline />
      <ButtonCTA path={"/signup"} textColor={"#FFFFFF"} bgColor={"#7691B9"} />
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
      <SliderButton bgColor={"#FFFFFF"}>
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
      <CategoryCard />
    </div>
  );
};

export default Home;
