import React, { useState } from 'react';
import cars from "./cars";
import Car from "./components/Car";
import Filter from "./components/Filter";
import "./styles/cars.css";

function App() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };


  const filteredCars = cars.filter(car => parseFloat(car.price) <= parseFloat(filter) || filter === "");
  return (
    <div className="App">
      <h1>Lista de Mașini</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <div className="car-list">
        {filteredCars.map((car, index) => (
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

