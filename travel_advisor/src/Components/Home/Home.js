import { React, useEffect, useState } from "react";
import "./home.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
import Blog from "../Blog/Blog";
import { Link, useNavigate } from "react-router-dom";
import PropsExporter from "../utils/Propsexporter";
import HomeCard from "./HomeCard";
import About from "../About/About";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="home">
        <div className="secContainer">
          <div className="homeText">
            <h1 data-aos="fade-up" data-aos-duration="2500" className="title">
              Plan Your Trip With TripMaker
            </h1>
            <p className="subTitle"  data-aos="fade-up" data-aos-duration="2500">
              Travel to your favourite city with respectful of the environment!
            </p>
            <button className="btn" data-aos="fade-up" data-aos-duration="3500">
              <a href="#">Explore now</a>
            </button>
          </div>
          <HomeCard />
        </div>
      </section>
      <Popular />
      <About />
      <Offers />
      <Blog />
      <PropsExporter />
    </>
  );
};

export default Home;
