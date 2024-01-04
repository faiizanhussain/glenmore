import { NavLink } from "react-router-dom";

// import React from 'react'

interface Props {
  Text: string;
  Link: string;
  backgroundColor?: string;
  action?: any;
}

export const Button = ({ Text, Link, backgroundColor, action }: Props) => {
  return (
    <>
      <button
        onClick={action}
        className={
          backgroundColor === "dark"
            ? "bg-white hover:bg-red-600 hover:text-white text-black py-2 px-4 rounded my-3"
            : "bg-gray-900 hover:bg-red-600 text-white py-2 px-4 rounded my-3"
        }>
        <NavLink to={Link}>{Text}</NavLink>
      </button>
    </>
  );
};
