import React from 'react';

const Filter = ({ filter, onFilterChange, onSortChange }) => {
  return (
    <div className="filter">
      <label htmlFor="price-filter">Filtrează după preț:</label>
      <input
        type="number"
        id="price-filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Introduceți prețul maxim"
      />
      <label htmlFor="sort-order">Sortare:</label>
      <select id="sort-order" onChange={onSortChange}>
        <option value="asc">Crescător</option>
        <option value="desc">Descrescător</option>
      </select>
    </div>
  );
};

export default Filter;

