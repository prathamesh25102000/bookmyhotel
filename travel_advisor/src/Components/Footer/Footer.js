import React from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="section">
      <div className="footerContainer footer-grid">
        <div className="footerLogoSec">
          <div className="footerLogoDiv">
            <h1>
              <a href="#" className="footerLogo">
                <SiYourtraveldottv className="footerIcon" /> TripMaker
              </a>
            </h1>
          </div>
          <div className="socials footer-flex">
            <ImFacebook className="soialIcon" />
            <BsTwitter className="soialIcon"  />
            <AiFillInstagram className="soialIcon"  />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linktitle">Information </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linktitle">Helpful Links</span>
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linktitle" style={{ textAlign: "left" }}>
            Contact Us
          </span>
          <li>info@tripplanner.com</li>
          <li>+123 456 7899</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
