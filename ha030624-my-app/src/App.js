import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="inputField"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="input"
          placeholder="Enter item"
        />
        <button type="submit" name="submitButton" aria-label="submit">Submit</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index} name="listEntry">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

