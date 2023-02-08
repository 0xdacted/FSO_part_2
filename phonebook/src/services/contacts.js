import axios from 'axios'
const baseURL = 'http://localhost:3001/contacts'

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = acios.post(baseURL, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {getAll, create, update}