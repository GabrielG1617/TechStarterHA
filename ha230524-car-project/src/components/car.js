import React from "react";
import "../styles/cars.css";

const Car = ({ name, price, image, available }) => {
  return (
    <div className="car">
      <img src={image} alt={name} width="300" height="auto" />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Available: {available}</p>
    </div>
  );
};

export default Car;