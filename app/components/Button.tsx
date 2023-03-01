import { FC } from "react";
import Link from "next/link";

const Button: FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <button className="mx-1 my-1  px-3 py-1  rounded-lg bg-gray-300 hover:bg-green-500 text-black-50">
      <Link href={link}>{text}</Link>
    </button>
  );
};
export default Button;
