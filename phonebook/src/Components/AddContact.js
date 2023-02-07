const AddContact = ({newName, newNumber, handleNameChange, handleNumberChange, addContact}) => {
  return (
    <form onSubmit={addContact}>
      <h2>Add contact</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange}/> <br></br>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default AddContact