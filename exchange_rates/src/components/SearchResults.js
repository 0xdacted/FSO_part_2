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


const SearchResults = ({filteredCountries}) => {
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
      </div>
      <h1>{country.flag}</h1>
    </div>
    )
  }
  
  return (
    <div> 
      {filteredCountries.map(country => 
          <Country key={country.flag} name={country.name.common} />
        )}
    </div>
  )
}

export default SearchResults