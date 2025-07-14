import React, { useState } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md text-black p-4 shadow-lg rounded-b-2xl">
        <div className="flex items-center justify-between ml-auto mr-auto">
          <a href="#" className="text-2xl font-bold">
            TRAVEL BEST
          </a>
          <button
            className="block text-black cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <MdMenuOpen className="text-3xl" />
            ) : (
              <MdMenu className="text-3xl" />
            )}
          </button>
          <ul
            className={`md:flex md:space-x-6 md:items-center absolute md:static top-16 left-0 w-full bg-[#f0f8ff] md:w-auto md:bg-transparent md:flex-row transition-all duration-300 ease-in-out ${
              isOpen ? "h-[200px]" : "h-[0px]"
            }`}
          >
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("home");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                href="#home"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("tentang");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                href="#tentang"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("pelayanan");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                href="pelayanan"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}
              >
                Pelayanan
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                href="contact"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
