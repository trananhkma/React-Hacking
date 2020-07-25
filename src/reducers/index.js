import { combineReducers } from 'redux'
import counter from './counter'
import checkout from './checkout'
import todoList from './todoList'


export default combineReducers ({
  counter: counter,
  checkout: checkout,
  todoList: todoList,
})