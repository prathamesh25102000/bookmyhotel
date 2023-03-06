import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

const HomeCard = () => {
  const myContext = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = async (event) => {
    event.preventDefault();
    navigate(`/search_location`);
  };

  return (
    <form className="homeCard grid" onSubmit={handleChange}>
      <div
        className="locationDiv"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <label htmlFor="location">origin</label>
        <input
          type="text"
          id="origin"
          defaultValue={myContext.origin}
          onChange={(e) => myContext.inputChange(e)}
          placeholder="your dream destination"
          required
        />
      </div>
      <div className="distDiv" data-aos="fade-right" data-aos-duration="2500">
        <label htmlFor="distance">Destination</label>
        <input
          type="text"
          id="destination"
          defaultValue={myContext.destination}
          onChange={(e) => myContext.inputChange(e)}
          placeholder="11 Meters"
        />
      </div>
      <div className="priceDiv" data-aos="fade-right" data-aos-duration="3000">
        <label htmlFor="price">price</label>
        <input type="text" placeholder="$15 - $200" />
      </div>

      <button className="btn search" type="submit">
        <a href={`/search_location`}>Search</a>
      </button>
    </form>
  );
};

export default HomeCard;
