import axios from 'axios'
import Cookies from 'js-cookie'

export default axios.create({
  baseURL: 'https://aides-territoires.beta.gouv.fr/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrftoken')
  }
})