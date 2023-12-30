import { Content } from "../Data/StaticData";
import { Button } from "../FunctionalComponents/Button";
import "./components.css";

function About() {
  return (
    <>
      <div className="w-8/12 flex mx-auto justify-between content-center space-x-10 py-10">
        <div className="w-10/12 flex space-x-4 overflow-hidden">
          <img className="w-full" src="./src/assets/Rectangle 8.png" alt="" />
          <img className="w-full" src="./src/assets/Rectangle 5.png" alt="" />
        </div>
        <div className="w-full flex flex-col justify-center">
          <h3 className="text-2xl font-normal text-red-600 mb-2">
            {Content.AboutUs_Section.Sub_Title}
          </h3>
          <h1 className="w-full text-4xl font-bold tracking-tight">
            {Content.AboutUs_Section.Title}
          </h1>

          <p className="text-md font-normal mt-3">
            {Content.AboutUs_Section.Text}
          </p>
          <span>
            <Button Text="Start Today" Link="#" />
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
