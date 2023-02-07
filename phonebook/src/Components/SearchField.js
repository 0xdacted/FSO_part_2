const SearchField = ({value, onChange}) => {
  return (
    <div>
      search: <input value={value} onChange={onChange}/>
    </div>
  )
}

export default SearchField