import { useState, useEffect } from 'react'
import axios from 'axios'
import Contacts from './Components/Contacts'
import AddContact from './Components/AddContact'
import SearchField from './Components/SearchField'

const App = () => {
  const [persons, setPersons] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    axios.get('http://localhost:3001/persons').then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  
  const addContact = (event) => {
    event.preventDefault()
    const nameAlreadyExists = persons.some(person => person.name === newName)
    if (nameAlreadyExists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField value={searchTerm} onChange={handleSearch}/>
      <AddContact newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addContact={addContact}/>
      <Contacts filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App