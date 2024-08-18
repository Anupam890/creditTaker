import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider"; 
import 'animate.css';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState(""); 
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

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

  const handlePin = (e) => {
    e.preventDefault();
    const correctPin = "Cutm123@";
    if (pin === correctPin) {
      toast.success('Login successful!', {
        position: "bottom-center"
      });
      login();
      setShowModal(false); 
      setPin(""); 
      navigate("/admin-panel");
    } else {
      toast.error('Incorrect PIN. Please try again.', {
        position: "bottom-center"
      });
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success('Logged out successfully!', {
      position: "bottom-center"
    });
  };

  return (
    <>
      <nav className="text-black h-20 flex justify-between md:justify-around items-center px-3 border-b shadow-sm mb-4 animate__animated animate__slideInDown">
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
            {isAuthenticated ? (
              <li className="cursor-pointer">
                <button onClick={handleLogout} className="text-lg">
                  Logout
                </button>
              </li>
            ) : (
              <li className="cursor-pointer">
                <MdAdminPanelSettings size={26} onClick={() => setShowModal(true)} />
              </li>
            )}
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavbar(!navbar)}
            className="focus:outline-none"
          >
            {navbar ? (
              <RxCross2 size={24} className="cursor-pointer" />
            ) : (
              <FaBars className="cursor-pointer" size={24} />
            )}
          </button>
        </div>
      </nav>

      {navbar && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          <div
            id="sidebar"
            className={`fixed left-0 top-0 h-full w-64 bg-[#07294D] text-white z-50 transform transition-transform duration-300 ease-in-out animate__animated animate__slideInDown`}
            style={{
              transform: navbar ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <RxCross2
              onClick={() => setNavbar(false)}
              className="focus:outline-none cursor-pointer absolute top-4 right-4"
              size={24}
            />
            <ul className="flex flex-col items-start p-4 space-y-4 mt-14">
              <li className="hover:text-gray-400 cursor-pointer text-lg">
                <Link to="/" onClick={() => setNavbar(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                <Link to="basketcredits" onClick={() => setNavbar(false)}>
                  Basket Credits
                </Link>
              </li>
              {isAuthenticated ? (
                <li className="cursor-pointer">
                  <button onClick={handleLogout} className="text-lg text-red-500">
                    Logout
                  </button>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <MdAdminPanelSettings size={26} onClick={() => setShowModal(true)} />
                </li>
              )}
            </ul>
          </div>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
            <form onSubmit={handlePin}>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Enter admin PIN"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                type="submit"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="ml-2 text-red-500 px-4 py-2 rounded hover:underline"
              >
                Close
              </button>
            </form>
          </div>
          <Toaster />
        </div>
      )}
    </>
  );
}

export default Navbar;
