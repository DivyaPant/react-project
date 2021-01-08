import React from "react";

//Header Component for displaying header on screen
const Header = () => {
  return (
    <header className="header">
      <div className="max-width-header">
        <span className="logo">
          <img
            className="img-logo"
            src="//gillion.shufflehound.com/foodie/wp-content/uploads/sites/4/2017/01/Logo.png"
            alt="Gillion Foodie Demo"
          ></img>
        </span>
        <span className="header-content">
          <ul className="items">
            <p>Home</p>
            <p>Features</p>
            <p>Blog Styles</p>
            <p>Mega Menu</p>
            <p>Shop</p>
          </ul>
        </span>
      </div>
      <hr></hr>
    </header>
  );
};

export default Header;
