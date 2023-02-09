import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY 

const get = (lat, lon, part) => {
  const baseURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

export default {get}