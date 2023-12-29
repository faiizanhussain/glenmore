// import React from 'react'

interface Props {
  Text: string;
  Link: string;
}

export const Button = ({ Text, Link }: Props) => {
  return (
    <>
      <button className="bg-gray-900 hover:bg-red-600 text-white py-2 px-4 rounded my-3">
        <a href={Link}>{Text}</a>
      </button>
    </>
  );
};
