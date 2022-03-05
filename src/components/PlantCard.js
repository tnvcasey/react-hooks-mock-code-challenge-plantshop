import React, { useState } from "react";

function PlantCard( {plant}) {

  const [inStock, setInStock] = useState(true)

  function stockClicker(){
    setInStock(!inStock)

  }

  const { name, image, price } = plant; 
  return (
    <li className="card">
      <img src={image} alt={image} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary" onClick={stockClicker}>{inStock?  "In Stock" : "Out of Stock"}</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
