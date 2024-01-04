import { Content } from "../Data/StaticData";
import IconText from "../FunctionalComponents/IconText";
import Form from "../FunctionalComponents/Form";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 w-full mt-10">
        <div className="flex w-8/12 mx-auto">
          <div className=" w-full py-20">
            <h1 className="w-8/12 font-bold text-3xl text-white text-2xl">
              Request a consultation & connect with our experts.
            </h1>
            <div className="text-white py-3 space-y-2">
              {Content.Footer_Section.Footer.map((item: any) => (
                <IconText
                  key={item.Title}
                  Icon={item.Icon}
                  Title={item.Title}
                />
              ))}
            </div>
          </div>
          <div className="py-20">
            <Form />
          </div>
        </div>
        <div className="flex flex-col items-center w-8/12 justify-center mx-auto">
          <img
            className="mb-5 w-1/4"
            src="./src/assets/Glenmore-Logo-1.png"
            alt="Glenmore Logo"
          />
          <div className="w-4/5 leading-7 text-center">
            {Content.Footer_Section.Quick_Links.map((item: any) => (
              <a key={item.Title} href={item.Link} className="text-white px-3">
                {item.Title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-8/12 mx-auto text-white border-t mt-20 border-slate-400 flex justify-between">
          <h6 className="p-3">
            copyrights@<span className="text-red-600">2023</span>
          </h6>
          <h6 className="p-3">
            Powered By<span className="text-red-600">QuivLabs</span>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;
