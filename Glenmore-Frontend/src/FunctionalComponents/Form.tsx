import { useState } from "react";
import { Button } from "./Button";
import { Content } from "../Data/StaticData";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch("https://sheetdb.io/api/v1/yjb5erapyq794", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            "G-Name": formData.name,
            "G-Email": formData.email,
            "G-Phone": formData.phone,
            "G-Services": formData.services,
            "G-Message": formData.message,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => setIsSubmitted(true));
  };

  return (
    <>
      {isSubmitted ? (
        <>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-20 h-20">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"></path>
            </svg>

            <p className="text-white font-bold text-center text-3xl">
              Thank you for submitting the form, we'll get back to you shortly
            </p>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-wrap">
          <label className="pr-3 flex flex-col w-1/2 text-white">
            Full Name
            <input
              placeholder="Name"
              className="bg-transparent border-b border-gray-500 p-3"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col w-1/2  text-white">
            Email Address
            <input
              placeholder="Email Address"
              className="bg-transparent border-b border-gray-500 p-3"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="pt-5 flex flex-col w-1/2  text-white pr-3">
            Phone No.
            <input
              placeholder="Email Address"
              className="bg-transparent border-b border-gray-500 p-3"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className="pt-5 flex flex-col w-1/2  text-white">
            Services
            <select
              name="services"
              id="services"
              className="bg-transparent border-b bg-transparent border-gray-500 p-3"
              onChange={handleChange}>
              {Content.Services_Section.Services.map((item: any) => (
                <option
                  key={item.Title}
                  className="text-gray-900"
                  value={item.Title}>
                  {item.Title}
                </option>
              ))}
            </select>
          </label>
          <label className="pt-5 flex flex-col w-full text-white py-3">
            Message
            <textarea
              placeholder="Email Address"
              className="bg-transparent border-b border-slate-500 p-3"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <span className="">
            <button className="bg-white hover:bg-red-600 hover:text-white text-black py-2 px-4 rounded my-3">
              Submit
            </button>
          </span>
        </form>
      )}
    </>
  );
}
