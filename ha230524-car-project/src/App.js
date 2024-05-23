import React from 'react';
import cars from "./cars";
import Car from "./components/car.js";
import "./styles/cars.css";

function App() {
  return (
    <div className="App">
      <h1>Lista de Mașini</h1>
      <div className="car-list">
        {cars.map((car, index) => (
          <Car
            key={index}
            name={car.name}
            price={car.price}
            image={car.image}
            available={car.available}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
