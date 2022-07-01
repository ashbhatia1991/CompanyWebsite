import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo-1.jpeg';

function Navbar() {
  return (
    <>
      <nav className="nav-navbar">
        <img src={logo} alt="website-logo" className="nav-logo" />
        <ul className="nav-menu">
          <li className="nav-menu__item">
            <NavLink exact to="#" className="nav-menu__link">About</NavLink></li>

          <li className="nav-menu__item">
            <NavLink exact to="#" className="nav-menu__link">Services</NavLink>
            <div className="nav-menu__sub-menu">
              <div className="nav-menu__sub-menu--col">
                <h4 className="heading-h4"><NavLink exact to="#" className="nav-menu__sub-menu-link">Resources for</NavLink></h4>
                <ul className="ul-list-setting">
                  <li className="li-menu-setting">Web Application Development</li>
                  <li className="li-menu-setting">Mobile Application Development</li>
                  <li className="li-menu-setting">E-commerce Development</li>
                  <li className="li-menu-setting">QA/Software Testing</li>
                </ul>
              </div>
              <div className="nav-menu__sub-menu--col">
                <h4 className="heading-h4"><NavLink exact to="#" className="nav-menu__sub-menu-link">Frontend</NavLink></h4>
                <ul className="ul-list-setting">
                  <li className="li-menu-setting">Angular.js</li>
                  <li className="li-menu-setting">React.js</li>
                  <li className="li-menu-setting">Node.js</li>
                  <li className="li-menu-setting">Vue.js</li>
                </ul>
              </div>
              <div className="nav-menu__sub-menu--col">
                <h4 className="heading-h4"><NavLink exact to="#" className="nav-menu__sub-menu-link">Backend</NavLink></h4>
                <ul className="ul-list-setting">
                  <li className="li-menu-setting">PHP</li>
                  <li className="li-menu-setting">.NET</li>
                  <li className="li-menu-setting">Java</li>
                  <li className="li-menu-setting">Python</li>
                </ul>
              </div>
              <div className="nav-menu__sub-menu--col">
                <h4 className="heading-h4"><NavLink exact to="#" className="nav-menu__sub-menu-link">Mobile</NavLink></h4>
                <ul className="ul-list-setting">
                  <li className="li-menu-setting">React Native</li>
                  <li className="li-menu-setting">iOS</li>
                  <li className="li-menu-setting">Andriod</li>
                  <li className="li-menu-setting">iOS Swift</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-menu__item">
            <NavLink exact to="#" className="nav-menu__link">Industries</NavLink>
            <div className="nav-menu__sub-menu">
              <div className="nav-menu__sub-menu--col">
                <h4 className="heading-h4"><NavLink exact to="#" className="nav-menu__sub-menu-link">Where we serve</NavLink></h4>
                <ul className="ul-list-setting">
                  <li className="li-menu-setting">Retail and Ecommerce</li>
                  <li className="li-menu-setting">Sports and fitness</li>
                  <li className="li-menu-setting">Media, Publishing & Entertainment</li>
                  <li className="li-menu-setting">Food & Beverage</li>
                  <li className="li-menu-setting">Education & Training</li>
                  <li className="li-menu-setting">Healthcare</li>
                  <li className="li-menu-setting">Hotel and Tourism</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-menu__item">
            <NavLink exact to="#" className="nav-menu__link">Blog</NavLink></li>
          <li className="nav-menu__item nav-menu__item">
            <NavLink exact to="#" className="nav-menu__link">Contact Us</NavLink></li>
        </ul>
      </nav>

    </>
  );
}

export default Navbar;