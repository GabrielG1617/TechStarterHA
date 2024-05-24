import React, { useState, useEffect } from 'react';

const Car = ({ name, price, image, available }) => {
  const [timer, setTimer] = useState(Math.floor(Math.random() * 10000) + 3600);
 const [discountPrice, setDiscountPrice] = useState((price * 0.9).toFixed(2));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="car-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Disponibile: {available}</p>
      <p className="car-price">{price} €</p>
      <p className="car-discount">{discountPrice} €</p>
      <div className="car-timer">Timp ramas: {formatTime(timer)}</div>
      {timer > 0 && <div className="car-discount-tag">Reducere</div>}
    </div>
  );
};

export default Car;
