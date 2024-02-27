const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span className="flex bg-red-500 bg-opacity-10 p-1 m-1 rounded ">
        Home
      </span>
      <div className="flex flex-1">
        <a
          className="mr-2 bg-red-500 bg-opacity-10 p-1 m-1 rounded "
          href="1/about"
        >
          About
        </a>
        <a
          className="mr-2 bg-red-500 bg-opacity-10 p-1 m-1 rounded "
          href="1/pricing"
        >
          Pricing
        </a>
        <a
          className="mr-2 bg-red-500 bg-opacity-10 p-1 m-1 rounded "
          href="1/contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
