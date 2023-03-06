import { React, useEffect } from "react";
import "./about.css";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="aboutSection">
      <div className="secContainer">
        <h1
          style={{
            color: "black",
            lineHeight: "1.5rem",
            fontSize: "2rem",
            fontWeight: "700",
            textAlign: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Why Hikings?
        </h1>
        <div className="mainContent about-grid" style={{ display: "flex" }}>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleAboutItem"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="aboutImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8L7w1Fug8w0Rm0cMnBB_2n8IGbXQVi62MA&usqp=CAU"
              />
            </div>
            <h3 className="aboutTitle">100+ Mountains</h3>
            <p className="aboutSubtitle">
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves well-being
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleAboutItem"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="aboutImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PejgpkEpGwXSG20pRCd_czTzaFNM1PWqTg&usqp=CAU"
              />
            </div>
            <h3 className="aboutTitle">1000+ Hikings</h3>
            <p className="aboutSubtitle">
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves well-being
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleAboutItem"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="aboutImg"
                src="https://static.vecteezy.com/system/resources/previews/001/974/201/original/customer-reviews-feedback-free-vector.jpg"
              />
            </div>
            <h3 className="aboutTitle">20k+ Customers</h3>
            <p className="aboutSubtitle">
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves well-being
            </p>
          </div>
        </div>
        <div className="videoCard">
          <div className="cardContent">
            <div
              data-aos="fade-up"
              data-aos-duration="3500"
              className="aboutText"
            >
              <h2 style={{textAlign:'center'}}>Wonderful experience nin there!</h2>
              <p
                style={{
                  color: "black",
                  fontSize: "17px",
                }}
                className='aboutPara'
              >
                The adventure subranking is based on an equally weighted average
                of scores from seven countries
              </p>
            </div>
            <div className="card1">
              <video
                src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQ0NT9TAHtSmgoL4NspO3MgwSKb9uVE1UL_gQ"
                autoPlay
                loop
                muted
                controls
                typeof="video/ogg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
