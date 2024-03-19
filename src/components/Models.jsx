import React from "react";
import "./Models.css";

function Models() {
  return (
    <div className="gender">
      <div className="img1-container">
        <div className="img1">
          <img
            src="https://cms.longines.com/uploads/media/text-with-media/08/1188-Block_Men_RJP.jpg?v=1-0&w=1080"
            alt=""
          />
        </div>
        <h2>Mens</h2>
        <h2>Watches</h2>
      </div>
      <div className="img1-container">
        <div className="img2">
          <img
            src="https://cms.longines.com/uploads/media/text-with-media/09/1189-Block_Woman_JL_1.jpg?v=2-0&w=1080"
            alt=""
          />
        </div>
        <h2>Womens</h2>
        <h2>Watches</h2>
      </div>
    </div>
  );
}

export default Models;
