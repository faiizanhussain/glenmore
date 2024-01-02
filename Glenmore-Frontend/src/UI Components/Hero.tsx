import React from "react";
import { Button } from "../FunctionalComponents/Button";
import "./components.css";

const Hero_Section: React.FC = () => {
  return (
    <>
      <div className="hero flex justify-center py-40" id="hero">
        <div className=" w-8/12">
          <h1 className="text-5xl font-bold text-white w-3/4 leading-tight pb-2">
            IT Advisory that delivers results - Partnering for success and
            beyond
          </h1>
          <Button Text="Get Started" Link="#" />
        </div>
      </div>
    </>
  );
};

export default Hero_Section;
