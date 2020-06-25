import { combineReducers } from 'redux'
import counter from './counter'
import checkout from './checkout'


export default combineReducers ({
  counter,
  checkout
})