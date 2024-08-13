import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="bg-[#07294D] text-white h-20 flex justify-between md:justify-around items-center px-3">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Credit Tracker</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="nav-links flex gap-4">
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="basketcredits">Basket Credits</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavbar(!navbar)}
            className="focus:outline-none"
          >
            {navbar ? <RxCross2 size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {navbar && (
        <div className="bg-[#07294D] text-white md:hidden flex flex-col items-center space-y-4 py-4">
          <ul className="flex flex-col items-center gap-4">
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="basketcredits">Basket Credits</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
