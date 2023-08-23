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
import Testimonials from "../components/ui/Testimonials";
import Newletter from "../components/Newletter";
import Footer from "../components/Footer";

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
      <Testimonials />
      <Newletter />
      <Footer />
    </div>
  );
};

export default Home;
