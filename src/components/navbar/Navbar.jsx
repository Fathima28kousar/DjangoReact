import React, { useState } from "react";
import PostSearch from "./search/PostSearch";
import { FaBars } from "react-icons/fa";
import styles from './Navbar.module.css';

const Navbar = () => {
  const MenuItems = [
    { Name: "Home", Link: "#" },
    { Name: "Recipes", Link: "#" },
    { Name: "About Us", Link: "/about" },
    { Name: "Subscribe", Link: "#" },
  ];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 ">
      <h4>
        <a className={`${styles.customBrand} navbar-brand text-center`} href="http://localhost:3000/">CodingsTrade</a>
      </h4>
      <button className="navbar-toggler" type="button" onClick={() => setOpenMenu(!openMenu)}>
        <FaBars />
      </button>
      <div className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          {MenuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link text-dark mr-4" href={item.Link}>{item.Name}</a>
            </li>
          ))}
        </ul>
        <div className="ml-auto"> {/* Add ml-auto class here */}
          <PostSearch />
        </div>
      </div>
    </nav>
    <div className={`${styles.heading} d-flex justify-content-center mt-2` }>
      <h5>Simple Reciepes for coders!</h5>
      <h5 className={`${styles.h5} ml-2`}>Simple Reciepes for coders!</h5>
    </div>
    </div>
  );
};

export default Navbar;
