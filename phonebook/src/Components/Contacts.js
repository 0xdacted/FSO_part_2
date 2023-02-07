const Person = (props) => {
  return (
    <div>
    {props.name} {props.number}
    </div>
  )
  }

const Contacts = ({ filteredPersons }) => {
  return (
    <div>
      <h2>Numbers</h2>
        {filteredPersons.map(person => 
          <Person key={person.id} name={person.name} number={person.number} />
        )}
    </div>
  )
}

export default Contacts