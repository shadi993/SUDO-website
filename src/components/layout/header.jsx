import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-transparent.png";

function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home route
  };

  return (
    <header className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-center">
            <img
              src={Logo}
              className="h-12 w-12 rounded-full mr-2 cursor-pointer"
              alt="Logo"
              onClick={handleLogoClick}
            />
            <h1 className="font-audiowide font-bold text-2xl select-none">
              SUDO
            </h1>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-6 text-foreground font-semibold">
              <li>
                <Link
                  to="/"
                  className="py-2 hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="py-2 hover:text-primary transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/our-team"
                  className="py-2 hover:text-primary transition-colors duration-200"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {isOpen && (
          <nav className="lg:hidden mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block py-2 px-4 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/our-team"
                  className="block py-2 px-4 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Menubar;
