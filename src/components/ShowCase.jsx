import React from "react";

function ShowCase({ Data }) {
  return (
    <div className="watch-container">
      {console.log(Data)}
      {Data.map((i) => {
        return (
          <div className="watch" key={i.id}>
            <img src={i.img} alt="" />
            <h1 className="watch-name">{i.name}</h1>
            <div className="watch-body">
              <p>
                {i.radius} - {i.type}
              </p>
              <p>{i.material}</p>
              <p>${i.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowCase;
