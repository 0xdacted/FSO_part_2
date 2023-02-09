const Country = (props) => {
return (
  <div>
    {props.name}
  </div>
)
}


const SearchResults = ({filteredCountries}) => {
  return (
    <div> 
      {filteredCountries.map(country => 
          <Country key={country.flag} name={country.name.common} />
        )}
    </div>
  )
}

export default SearchResults