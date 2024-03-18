import React from "react";
import { Link } from "react-router-dom";
import sunset from "../assets/sunset.jpg";
import "./Overview.css";

function Overview() {
  return (
    <>
      <div className="img-container">
        <img
          className="background-img"
          src="https://cms.longines.com/uploads/media/homepage-slider-desktop/04/1544-Slider_Desktop_Conquest_Heritage_Central_Power_Reserve.jpghttps://cms.longines.com/uploads/media/homepage-slider-desktop/04/1544-Slider_Desktop_Conquest_Heritage_Central_Power_Reserve.jpg?v=2-0&amp;w=2400 2400w"
          alt=""
        />
      </div>
      <div className="overview">
        <div className="overview-elements">
          <h1>Conquest</h1>
          <h1>Heritage</h1>
          <Link>
            <button className="discover">Discover</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Overview;
