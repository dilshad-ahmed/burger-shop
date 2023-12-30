import React from "react";
import Logo from "../../assets/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Menu",
    link: "/#menu",
  },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-xl">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-16" />
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-300"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
