import React from 'react';
import NavBar from './components/NavBar';
import ApartmentCard from './components/ApartmentCard';
import './App.css';

const apartments = [
  {
    id: 1,
    image: '/images/apartament1.jpg',
    title: 'Casă de înaltă calitate cu terasă la mijloc, într-o locație excelentă!',
    location: 'Wiefelstede, Ammerland (district)',
    price: '1.300 €',
    rooms: '3 Cameră',
    size: '90 m² spațiu de locuit',
    propertySize: '100 m² Proprietate'
  },
  {
    id: 2,
    image: '/images/apartament2.jpg',
    title: 'Casă semi-decomandată atractivă cu 5 camere de închiriat la marginea orașului Oldenburg (Ofenerdiek).',
    location: 'Wiefelstede, Ammerland (district)',
    price: '1.200 €',
    rooms: '5 Cameră',
    size: '132 m² spațiu de locuit',
    propertySize: '290 m² Proprietate'
  },
  {
    id: 3,
    image: '/images/apartament3.jpg',
    title: 'Vă puteți muta aici!',
    location: 'Varel, Friesland (district)',
    price: '1.400 €',
    rooms: '4 Cameră',
    size: '133 m² spațiu de locuit',
    propertySize: '322 m² Proprietate'
  },
  {
    id: 4,
    image: '/images/apartament4.jpg',
    title: 'Metjendorf - casă semi-decomandată.',
    location: 'Wiefelstede, Ammerland (district)',
    price: '1.765 €',
    rooms: '4 Cameră',
    size: '147 m² spațiu de locuit',
    propertySize: '298 m² Proprietate'
  },
  {
    id: 5,
    image: '/images/apartament5.jpg',
    title: 'Steenkamp 18, 26316 Varel',
    location: 'Varel, Friesland (district)',
    price: '1.250 €',
    rooms: '7 Cameră',
    size: '210 m² spațiu de locuit',
    propertySize: '700 m² Proprietate'
  }
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="filter-bar">
        {/* Adaugă filtrarea aici */}
      </div>
      <div className="apartments-list">
        {apartments.map(apartment => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
}

export default App;
