import React from "react";
import "./Novelities.css";
import ShowCase from "./ShowCase";
import { BestSellers, novelties } from "../assets/Data";
import { useState } from "react";

import Image1 from "../assets/watch1.avif";

function Novelties() {
  const [option, setOption] = useState(false);
  const myStyle =
    option === false ? { "border-bottom": "1.5px solid black" } : {};
  const myStyle2 =
    option === true ? { "border-bottom": "1.5px solid black" } : {};

  return (
    <>
      <div className="novelties">
        <button
          style={myStyle}
          onClick={(option) => {
            setOption(false);
          }}
        >
          Novelties
        </button>
        <button
          style={myStyle2}
          onClick={(option) => {
            setOption(true);
          }}
        >
          Best-Sellers
        </button>
      </div>
      {option === false ? (
        <ShowCase Data={novelties} />
      ) : (
        <ShowCase Data={BestSellers} />
      )}
    </>
  );
}

export default Novelties;
