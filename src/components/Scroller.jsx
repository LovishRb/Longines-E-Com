import React from "react";
import { BestSellers, novelties } from "../assets/Data";

function Scroller() {
  return (
    <div className="Scroller">
      {BestSellers.map((i) => {
        return (
          <div className="news-item">
            <img src={i.img} alt="" />
            <div className="news-body">
              <h1>{i.name}</h1>
              <p>{i.material}</p>
              <button>Discover</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Scroller;
