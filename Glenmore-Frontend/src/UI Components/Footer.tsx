import { Content } from "../Data/StaticData";
import IconText from "../FunctionalComponents/IconText";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 w-full">
        <div className=" flex w-10/12 mx-auto">
          <div className="bg-blue-500 w-full py-10">
            <h1 className="w-8/12 font-bold text-3xl text-white text-2xl">
              Request a consultation & connect with our experts.
            </h1>
            <div>
              {Content.Footer_Section.Footer.map((item: any) => (
                <IconText Icon={item.Icon} Title={item.Title} />
              ))}
            </div>
          </div>
          <div className="bg-blue-800  w-full"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
