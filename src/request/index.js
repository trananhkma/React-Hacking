import axios from 'axios'
import { METHODS, mainPath } from './const'


const {get, post, put, del} = METHODS
const {posts, todo} = mainPath

const mainInstance = axios.create({
  baseURL: 'http://localhost:6969/',
})


// Posts APIs
const getPost = id => mainInstance({url: posts+id, method: get})
const deletePost = id => mainInstance({url: posts+id, method: del})

// Todo APIs
const getTodo = () => mainInstance({url: todo, method: get})
const addTodo = data => mainInstance({url: todo, method: post, data: data})
const editTodo = (id,params) => mainInstance({url: todo+id, method: put, params: params})
const deleteTodo = id => mainInstance({url: todo+id, method: del})

export {
  getPost, deletePost,
  getTodo, addTodo, editTodo, deleteTodo,
}