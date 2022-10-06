import Flag from "./component/Flag";
import NavBar from "./component/NavBar";
import Input from "./component/Input";
import "./App.css";

function App() {
  const countries = [
    {
      id: "d1",
      image: "https://flagpedia.net/data/flags/w702/us.webp",
      countryname: "USA",
      population: 1073736,
      region: "American",

      capital: "washinton Dc",
    },
    {
      id: "d2",
      image: "https://flagcdn.com/w2560/mx.png",
      countryname: "Mexico",
      region: "euope",
      population: 236,
      capital: "mexico Dc",
    },
    {
      id: "1d3",
      image: "https://flagpedia.net/data/flags/w702/br.webp",
      countryname: "Brazil",
      region: "European",
      population: 173736,
      capital: "Brazil Dc",
    },
    {
      id: "d4",
      image: "https://flagpedia.net/data/flags/w702/ru.png",
      countryname: "Russia",
      region: "European",
      population: 2973736,
      capital: "russia Dc",
    },
    {
      id: "d5",
      image: "https://flagpedia.net/data/flags/w702/ng.png",
      countryname: "Nigeria",
      region: "Africa",
      population: 1736,
      capital: "Abuja",
    },
    {
      id: "d6",
      image: "https://flagpedia.net/data/flags/w702/ua.png",
      countryname: " Ukraine",
      region: "Africa",
      population: 1736,
      capital: "Europe",
    },
    {
      id: "d7",
      image: "https://flagpedia.net/data/flags/w702/sg.webp",
      countryname: "singapore",
      region: "Asia",
      population: 1736,
      capital: "Singa DC",
    },
    {
      id: "d8",
      image: "https://flagpedia.net/data/flags/w702/ge.webp",
      countryname: "Gorgia",
      region: "Asia",
      population: 1736,
      capital: "Gorgia DC",
    },
  ];
  return (
    <div className="container">
      <NavBar />
      {/* <Input /> */}
      <div className="flags">
        {countries.map((country) => (
          <Flag key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
