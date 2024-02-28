import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from ".";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];
const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/">
        <span className="flex bg-red-500 bg-opacity-10 p-1 m-1 rounded ">
          <HomeIcon />
        </span>
      </Link>

      <div className="flex flex-1">
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
        {/* <Link
          className="mr-2 bg-red-500 bg-opacity-10 p-1 m-1 rounded "
          href="/about"
        >
          About
        </Link>
        <Link
          className="mr-2 bg-red-500 bg-opacity-10 p-1 m-1 rounded "
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          className="mr-2 bg-red-500 bg-opacity-10 p-1 m-1 rounded "
          href="/contact"
        >
          Contact
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
