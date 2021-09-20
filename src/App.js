import './App.css';

import Countries from './components/Countries/Countries';


function App() {

  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}






















/*
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h3>Travelling around the world!!</h3>
      <h5>Countries Available: {countries.length}</h5>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Capital: {props.capital}</p>
    </div>
  )
}
*/
export default App;
