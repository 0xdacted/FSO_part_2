import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import SearchField from './components/SearchField'
import SearchResults from './components/SearchResults'


const App = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
      countriesService
      .getAll()
      .then(allCountries => { 
        setCountries(allCountries)})
      }, [] )

  const handleSearch = (event) => {
      setSearchTerm(event.target.value)
      }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
  
  const showData = (country) => {
    setSelectedCountry(country)
  }
    return (
      <div>
        <SearchField value={searchTerm} onChange={handleSearch}/>
        <SearchResults filteredCountries={filteredCountries} showData={showData} selectedCountry={selectedCountry}/>
      </div>
      )
  }

export default App;

