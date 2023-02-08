const Person = (props) => {
  return (
    <div>
    {props.name} {props.number} 
    <button onClick = {() => props.removeContact(props.id, props.name)}>delete</button>
    </div>
  )
  }

const Contacts = ({ filteredPersons, removeContact }) => {
  return (
    <div>
      <h2>Numbers</h2>
        {filteredPersons.map(person => 
          <Person key={person.id} id={person.id} name={person.name} number={person.number} removeContact={removeContact} />
        )}
    </div>
  )
}

export default Contacts