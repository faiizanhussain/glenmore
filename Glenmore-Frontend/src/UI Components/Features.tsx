import { Content } from "../Data/StaticData";
import IconBox from "../FunctionalComponents/IconBox";

const Features = () => {
  return (
    <>
      <div className="w-8/12 mx-auto flex justify-left flex-wrap" id="features">
        <div className="my-10">
          <h3 className="text-2xl font-normal text-red-600 mb-2">
            {Content.Features_Section.Sub_Title}
          </h3>
          <h1 className="w-full text-3xl font-bold tracking-tight">
            {Content.Features_Section.Title}
          </h1>

          <p className="text-md font-normal mt-3">
            {Content.Features_Section.Text}
          </p>
        </div>
        {Content.Features_Section.Features.map((item: any) => (
          <div key={item.Title} className="w-1/3 pr-10 pb-5">
            <IconBox Icon={item.Image} Title={item.Title} Text={item.Text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
