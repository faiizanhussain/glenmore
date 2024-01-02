import { useState } from "react";
import { Button } from "./Button";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value);
  };
  const handleServicesChange = (event: any) => {
    setServices(event.target.value);
  };
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <form className="flex flex-wrap">
        <label className="pr-3 flex flex-col w-1/2 text-white text-white">
          Full Name
          <input
            placeholder="Name"
            className="bg-transparent border-b border-gray-500 p-3"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="flex flex-col w-1/2  text-white">
          Email Address
          <input
            placeholder="Email Address"
            className="bg-transparent border-b border-gray-500 p-3"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className="pt-5 flex flex-col w-1/2  text-white pr-3">
          Phone No.
          <input
            placeholder="Email Address"
            className="bg-transparent border-b border-gray-500 p-3"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
          />
        </label>
        <label className="pt-5 flex flex-col w-1/2  text-white">
          Services
          <input
            placeholder="Email Address"
            className="bg-transparent border-b bg-transparent border-gray-500 p-3"
            type="text"
            value={services}
            onChange={handleServicesChange}
          />
        </label>
        <label className="pt-5 flex flex-col w-full text-white py-3">
          Message
          <input
            placeholder="Email Address"
            className="bg-transparent border-b border-slate-500 p-3"
            type="text"
            value={message}
            onChange={handleMessageChange}
          />
        </label>
        <span className="">
          <Button backgroundColor="dark" Text="Send Now" Link="#" />
        </span>
      </form>
    </>
  );
}
