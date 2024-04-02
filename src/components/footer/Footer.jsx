import React from "react";

const Footer = () => {
  const menuItems = [
    { name: "Home", link: "#" },
    { name: "Recipes", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Subscribe", link: "#" },
  ];

  return (
    <footer className="bg-danger text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="list-unstyled d-flex mb-0">
              {menuItems.map((item, index) => (
                <li key={index} className="me-3">
                  <a href={item.link} className="text-white text-decoration-none">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 text-md-end">
            <p className="mb-0">©2022 Codingstrade. Learn Coding with Shayan</p>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <h4 className="text-uppercase mb-4">Never Stop Learning!</h4>
      </div>
    </footer>
  );
};

export default Footer;
