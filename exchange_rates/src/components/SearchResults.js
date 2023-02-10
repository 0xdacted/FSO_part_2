import weatherService from '../services/weather'
import { useState, useEffect } from 'react'

const Weather = (props) => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    weatherService
    .get(props.lat, props.lng)
    .then(currWeather => {
      setWeather(currWeather)
    })
  }, [])
  return (
    <div>
      <h1>Weather in <Country name={props.country.name.common}/></h1>
      <p>temperature: {weather.temperature}</p>
      <p>wind: {weather.wind}</p>
    </div>
  )
}


const Country = (props) => {
return (
  <div>
    {props.name}
  </div>
)
}

const Capital = (props) => {
return (
  <div>
    Capital: {props.capital}
  </div>
)
}

const Area = (props) => {
  return (
    <div>
      Area: {props.area}
    </div>
  )
}

const Languages = ({languages}) => {
  return (
  <div>
  <h3>Languages</h3>
  <ul>
    {Object.values(languages).map(language => (
      <li key={language}>{language}</li>
    ))}
    </ul>
    </div>
  )
}


const SearchResults = ({filteredCountries, showData, selectedCountry}) => {
  
  if (selectedCountry) {
    const country = selectedCountry
    return (
      <div>
      <h2><Country name={country.name.common}/></h2> 
      <div>
        <Capital capital = {country.capital}/>
        <Area area= {country.area}/>
        <Languages languages={country.languages}/>
      </div>
      <h1>{country.flag}</h1>
      <Weather lat={country.latlng[0]} lng={country.latlng[1]} country={country}/>
      <button onClick={() => showData(null)}>return</button>
    </div>
    )
    
  }
  
  if (filteredCountries.length > 10) {
    return <div>Too many matches, please specify another filter</div>
  }
  else if (filteredCountries.length == 1) {
    const country = filteredCountries[0]
    return (
    <div>
      <h2><Country name={country.name.common}/></h2> 
      <div>
        <Capital capital = {country.capital}/>
        <Area area= {country.area}/>
        <Languages languages={country.languages}/>
        <Weather lat={country.latlng[0]} lng={country.latlng[1]} country={country}/>
      </div>
      <h1>{country.flag}</h1>
    </div>
    )
  }

  return (
    <div> 
      {filteredCountries.map(country => (
        <div key={country.flag}>
          <Country name={country.name.common} />
          <button onClick={() => showData(country)}>show</button>
        </div>
        ))}
    </div>
  )
}

export default SearchResults