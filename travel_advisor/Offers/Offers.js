import {React,useEffect} from "react";
import "./offer.css";
import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import "aos/dist/aos.css";
import Aos from "aos";

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="section offer">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro" >
          <h2 className="secTitle offerTitle">Special Offers</h2>
          <p className="secSubTitle" style={{ color: "black", fontWeight: "bolder", textAlign:"center" }}>
            From historical cities to natural spectaculars, come to see the best
            of the world
          </p>
        </div>
        <div className="main-content offer-grid">
          <div data-aos="fade-up" data-aos-duration="3500" className="singleOffer">
            <div className="offer-img">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ff/b7/8b/b03fabe4-8177-471a.jpg?w=400&h=-1&s=1" className="img"/>
              <span className="discount">30% off</span>
            </div>

            <div className="offerBody">
              <div className="price offer-flex">
                <h4>$1000</h4>
                <span className="status" style={{ color: "black" }}>
                  For rent
                </span>
              </div>
              <div className="amenities offer-flex">
                <div className="singleAmenity offer-flex">
                  <MdKingBed className="offer-icon" />
                  <small>2 beds</small>
                </div>

                <div className="singleAmenity offer-flex">
                  <MdBathtub className="offer-icon" />
                  <small>1 Bath</small>
                </div>

                <div className="singleAmenity offer-flex">
                  <FaWifi className="offer-icon" />
                  <small>Wi-Fi</small>
                </div>

                <div className="singleAmenity offer-flex">
                  <MdAirportShuttle className="offer-icon" />
                  <small>Shuttle</small>
                </div>
              </div>
              <div className="location offer-flex">
                <MdLocationOn className="offer-icon" />
                <small>450 Vine, #350, London</small>
              </div>
              <button className="offer-btn offer-flex">
                View Details
                <BsArrowRightShort className="offer-icon" style={{color:'white'}} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
