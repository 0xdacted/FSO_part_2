import axios from 'axios'
const baseURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_key}`

const get = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

export default {get}