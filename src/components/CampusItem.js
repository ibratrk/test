import React from "react";

function CampusItem({ image, name, location }) {
  return (
    <div className="menuItem">
          <h1> {name} </h1>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p> {location} </p>
    </div>
  );
}

export default CampusItem;
