// import "./App.css";
import { Content } from "./Data/StaticData";

function App() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <h1 className="text-5xl">This is the start of the document</h1>
        {/* Fetch menu from the content */}
      </div>
      <div className="flex mx-10 mt-5">
        {Content.Services_Section.Services.map((item: any, index: number) => {
          return (
            <>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2">
                <img
                  className="object-cover"
                  src={item.Image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.Title}</div>
                  <p className="text-gray-700 text-base">{item.Text} </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
