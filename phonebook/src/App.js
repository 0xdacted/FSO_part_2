import { useState } from 'react'


const Person = (props) => {
  return (
    <div>
    {props.name} {props.number}
    </div>
  )
  }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
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
      search: <input value={searchTerm} onChange={handleSearch}/>
      <h2>Add contact</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/> <br></br>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => 
          <Person key={person.id} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App