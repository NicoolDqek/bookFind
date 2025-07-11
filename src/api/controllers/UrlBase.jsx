

import axios from 'axios'

const UrlBase= axios.create({
 baseURL: 'https://openlibrary.org/',
  headers: {
    'Content-Type': 'application/json'
  }
})


export default  UrlBase