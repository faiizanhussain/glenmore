import { Content } from "../Data/StaticData";
import { Button } from "../FunctionalComponents/Button";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <div className="w-full bg-gray-800">
        <div className="w-8/12 mx-auto flex justify-between items-between py-2">
          <div className="social-icons flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-current text-red-600"
              fill="white"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50">
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-current text-red-600"
              fill="white"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30">
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
            </svg>
          </div>
          <div className="flex space-x-5">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#E53E3E"
                className="w-5 h-5 self-center">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <h1 className="text-white text-md ml-3 self-center">
                <a href="mailto:info@glenmore.com">info@glenmore.com</a>
              </h1>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#E53E3E"
                className="w-5 h-5 self-center">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <h1 className="text-white text-md ml-3 self-center">
                +61 333 2839
              </h1>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex justify-center py-2">
        <div className="w-8/12 mx-auto flex justify-between items-between">
          <div className="logo self-center">
            <img
              src="https://maxwellfrank.co.nz/glenmore/wp-content/uploads/2023/11/Glenmore-Logo.png"
              alt=""
            />
          </div>
          <div className="nav-links flex space-x-5 py-0 ">
            {Content.MenuItems.map((item: any) => (
              <h1
                key={item.Title}
                className="text-gray-700 text-md self-center hover:text-red-600 ">
                <Link to={item.Link}>{item.Title}</Link>
              </h1>
            ))}
          </div>
          <span>
            <Button Text="Let's Talk" Link="#" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
