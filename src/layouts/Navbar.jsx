import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbar && !document.getElementById("sidebar").contains(event.target)) {
        setNavbar(false);
      }
    };

    if (navbar) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navbar]);

  return (
    <>
      <nav className=" text-black h-20 flex justify-between md:justify-around items-center px-3 border-b shadow-sm mb-4">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Credit Tracker</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="nav-links flex gap-4">
            <li className="hover:text-gray-400 cursor-pointer text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer text-lg">
              <Link to="basketcredits">Basket Credits</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavbar(!navbar)}
            className="focus:outline-none"
          >
            {navbar ? <RxCross2 size={24} className="cursor-pointer" /> : <FaBars className="cursor-pointer" size={24}  />}
          </button>
        </div>
      </nav>
      
      {navbar && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          {/* Sidebar */}
          <div
            id="sidebar"
            className="fixed left-0 top-0 h-full w-64 bg-[#07294D] text-white z-50 transform transition-transform duration-300 ease-in-out"
            style={{ transform: navbar ? "translateX(0)" : "translateX(-100%)" }}
          >
            <RxCross2
              onClick={() => setNavbar(false)}
              className="focus:outline-none cursor-pointer absolute top-4 right-4 " size={24}
            />
            <ul className="flex flex-col items-start p-4 space-y-4 mt-14">

              <li className="hover:text-gray-400 cursor-pointer text-lg">
                <Link to="/" onClick={() => setNavbar(false)}>Home</Link>
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                <Link to="basketcredits" onClick={() => setNavbar(false)}>Basket Credits</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
