import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./Header.css";

/**Nav bar component */
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <h1>My Cars</h1>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          {/* mob */}
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="/">Car Makes</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="/details">My Details</a>
          </li>
        </ul>
      </div>
      <ul className="signin-up" style={{ marginLeft: "800px" }}>
        {/* desk */}
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="/">Car Makes</a>
        </li>
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="/details">My Details</a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
