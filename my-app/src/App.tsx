import { useState } from "react";
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {

  const [isLightsOn, setIsLightsOn] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState(0);
  
// TOGGLE LIGHTS:
  const toggleLights = () => {
    setIsLightsOn((current => !current));
   }
   
// LOTTO NUMBERS:
  const generateNumbers = () => {
    const numbers = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 50) + 1
    );
    setLottoNumbers(numbers);
  };

// CLICK COUNTER:
  const incrementCount = () => {
    setCount((current) => current + 1);
  }

  return (
    <div style={{ backgroundColor: isLightsOn ? "white" : "black", color: isLightsOn ? "black" : "white"}}>
      <h1>Light Toggle</h1>
      <LightToggle toggleLights={toggleLights} />
      <div>Lights are on: <strong>{isLightsOn ? "True" : "False"}</strong></div>

      <h1>Lotto Numbers</h1>
      <LottoNumbers generateNumbers={generateNumbers} />
      <div>{lottoNumbers.join(", ")}</div>

      <h1>Click Counter</h1>
      <ClickCounter incrementCount={incrementCount}/>
      <div className="output">{count}</div>
    </div>
  );
};

export default App;
