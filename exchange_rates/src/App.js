import { useState, useEffect } from 'react'
import countriesService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState(null)
  
  useEffect(() => {
    if (countries) {
      countriesService
      .getAll()
      .then(shownCountries => { 
        setCountries(shownCountries)})
      }}, [countries] )
    
      return (
        <div>
          find countries:
        </div>
      )
  }

export default App;

