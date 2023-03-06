import { React, useState } from "react";
import "./Navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import TemporaryDrawer from "../Drawer";
import WindowSize from "../utils/WindoSize";

const Navbar = () => {
  const [active, setActive] = useState("navbar");
  const [transparent, setTransparent] = useState("header");
  const backGround = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  let windowWindth = WindowSize().width;
  window.addEventListener("scroll", backGround);
  const showNav = () => {
    if (active === "navbar") setActive("activeNavbar");
    if (active === "activeNavbar") setActive("navbar");
  };

  return (
    <>
      <section className="navbarSection">
        <div className={`${transparent} flex`}>
          <div className="logoDiv">
            <h1>
              <a href="#" className="logo">
                <SiYourtraveldottv
                  className="icon"
                  style={{
                    color: "orange",
                    fontSize: "55px",
                    backgroundColor: "transparent",
                  }}
                />{" "}
                TripMaker
              </a>
            </h1>
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                {/* <a href="home">Home</a> */}
                <Link to={"/"}>Home</Link>
              </li>
              <li className="navItem">
                <Link to={"/packages"}>Packages</Link>
              </li>
              <li className="navItem">
                <a href="#">Resources</a>
              </li>
              <li className="navItem">
                <a href="#">Contacts</a>
              </li>
              <li className="navItem">
                <Link to={"/blog"}>Blog</Link>
              </li>
              <div className="headerBtns flex">
                <button
                  className="loginBtn log"
                  style={{
                    border: "2px solid orange",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "3rem",
                  }}
                >
                  <a href="#">Login</a>
                </button>
                <button className="loginBtn btn">
                  <a href="#">Sign Up</a>
                </button>
              </div>
            </ul>
          </div>
          {/* <div className="toggleNavbar" onClick={showNav}>
          <GiHamburgerMenu
            className="icon hambg"
            style={{
              color: "orange",
              backgroundColor:
                active === "activeNavbar" ? "black" : "transparent",
            }}
          />
        </div> */}
          <TemporaryDrawer
            style={{ display: windowWindth > 1029 ? "none" : "block" }}
          />
        </div>
      </section>
    </>
  );
};

export default Navbar;
