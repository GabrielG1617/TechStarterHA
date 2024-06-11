import React from 'react';
import './ApartmentCard.css';

function ApartmentCard({ apartment }) {
  return (
    <div className="apartment-card">
      <img src={apartment.image} alt={apartment.title} />
      <div className="details">
        <h2>{apartment.price} Chirie la rece</h2>
        <p>{apartment.title}</p>
        <p>{apartment.location}</p>
        <p>{apartment.size}</p>
        <p>{apartment.rooms}</p>
        <p>{apartment.propertySize}</p>
        <button onClick={() => window.location.href = `/details.html?id=${apartment.id}`}>
          Mai multe detalii
        </button>
      </div>
    </div>
  );
}

export default ApartmentCard;
