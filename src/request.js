import axios from 'axios';

const JsonPlaceHolderConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  timeout: 1000,
}

const JsonPlaceHolder = axios.create(JsonPlaceHolderConfig)

export {JsonPlaceHolder}
