import React from "react";
import Link from "next/link";

interface Props {
  path: string;
  text: string;
}
export const ActiveLink = ({ path, text }: Props) => {
  return (
    <Link
      className="mr-2 bg-red-500 bg-opacity-10 p-1 m-1 rounded "
      href={path}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
