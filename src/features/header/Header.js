import React from "react";
import "./header.scss";
import logo from "../../assets/hublogo.PNG";

function Header() {
  return (
    <div className="header">
      {/* <h1>Header</h1> */}
      <div className="left">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="hublocker" />
          </a>
        </div>
        <div className="menu">
          <ul className="menulist">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Find a Locker</a>
            </li>
            <li>
              <a href="#">Size Guide</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="billButton">
          <a href="#">PAY YOUR BILL</a>
        </div>
        <div className="phoneNumber">080-188-0872</div>
        <div className="account">
          <a href="#">My Account</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
