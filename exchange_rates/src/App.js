import { useState, useEffect } from 'react'
import countriesService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (countries) {
      countriesService
      .getAll()
      .then(shownCountries => { 
        setCountries(shownCountries)})
      }}, [countries] )

  
    
    return (
      <div>
        find countries:<SearchField value={searchTerm} onChange={handleSearch}/>
      </div>
      )
  }

export default App;

