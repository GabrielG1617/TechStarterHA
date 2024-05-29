/*
import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("rot");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  // ? -> Ternary Operator -> eine andere Schreibweise für if else
  // bedingung ? ergebnis wenn true : ergebnis wenn false
  const nextColor = buttonColor === "rot" ? "blau" : "rot";
  const nextDisabledState = isButtonDisabled === false ? true : false;

  function farbeWechseln() {
    setButtonColor(nextColor);
  }

  function handleCheckboxChange() {
    // setIsButtonDisabled((prevState) => !prevState)
    setIsButtonDisabled(nextDisabledState);
  }

  return (
    <div className="App">
      <button
        disabled={isButtonDisabled}
        className={buttonColor}
        onClick={farbeWechseln}
      >
        Farbe zu {nextColor} wechseln
      </button>
      <br></br>
      <input id="checkbox" onChange={handleCheckboxChange} type="checkbox"></input>
      <label htmlFor="checkbox">Disable Button</label>
      {/* <h1>Learn react</h1> }
      </div>
    );
  }
  
  export default App;
*/

import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("rot");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const nextColor = buttonColor === "rot" ? "blau" : "rot";

  function farbeWechseln() {
    setButtonColor(nextColor);
  }

  function handleCheckboxChange() {
    setIsButtonDisabled((prev) => !prev);
  }

  const buttonClass = isButtonDisabled ? "grau" : buttonColor;

  return (
    <div className="App">
      <button
        disabled={isButtonDisabled}
        className={buttonClass}
        onClick={farbeWechseln}
      >
        Farbe zu {nextColor} wechseln
      </button>
      <br></br>
      <input id="checkbox" onChange={handleCheckboxChange} type="checkbox"></input>
      <label htmlFor="checkbox">Disable Button</label>
    </div>
  );
}

export default App;
