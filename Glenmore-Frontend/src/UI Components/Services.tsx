import { Content } from "../Data/StaticData";
import ImageBox from "../FunctionalComponents/ImageBox";

const Services: React.FC = () => {
  return (
    <>
      <div className="w-8/12 mx-auto flex justify-left flex-wrap" id="services">
        <div className="my-10">
          <h3 className="text-2xl font-normal text-red-600 mb-2">
            {Content.Services_Section.Sub_Title}
          </h3>
          <h1 className="w-full text-4xl font-bold tracking-tight">
            {Content.Services_Section.Title}
          </h1>

          <p className="text-md font-normal mt-3">
            {Content.Services_Section.Text}
          </p>
        </div>
        {Content.Services_Section.Services.map((item: any) => (
          <div key={item.Title} className="w-1/3 pr-10 pb-5">
            <ImageBox Image={item.Image} Title={item.Title} Text={item.Text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
