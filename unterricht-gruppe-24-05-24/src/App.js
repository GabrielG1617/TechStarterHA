import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [counter ,setCounter] = useState(0);
  useEffect( () => {
    console.log("Ai invatat useEfect" + counter)

  }, [counter] )

  function increment() {
    setCounter(counter +1 );
  }

  function decrement() {
    setCounter(counter -1);
  }

  function reset(){
    setCounter(0)
  }

  return(
    <div cassName="counteiner">
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>R</button>
    </div>
  );
}

  

export default App;
