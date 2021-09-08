import Header from "./components/Header";
import Autocomplete from "./components/Autocomplete";
import { useState } from 'react'
import Result from "./components/Result";

function App() {
  const [city1, setCity1] = useState(null)
  const [city2, setCity2] = useState(null)

  const cityClicked = (cityLink, setter) => {
    fetch(cityLink)
      .then(res => res.json())
      .then(res => ({
        name: res.full_name,
        population: res.population
      }))
      .then(city => setter(city))
  }

  return (
    <div className="container">
      <Header />
      <div style={{display: "flex"}}>
        <Autocomplete onCityClick={cityClicked} setter={setCity1} />
        <Autocomplete onCityClick={cityClicked} setter={setCity2} />
      </div>
      <Result city1={city1} city2={city2} />
    </div>
  );
}

export default App;
