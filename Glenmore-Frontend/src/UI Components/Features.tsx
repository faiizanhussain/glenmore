import { Content } from "../Data/StaticData";
import ImageBox from "../FunctionalComponents/ImageBox";

const Services = () => {
  return (
    <div className="w-8/12 mx-auto flex justify-left flex-wrap">
      {Content.Services_Section.Services.map((item: any) => (
        <div className="w-1/3 p-5">
          <ImageBox Image={item.Image} Title={item.Title} Text={item.Text} />
        </div>
      ))}
    </div>
  );
};

export default Services;
