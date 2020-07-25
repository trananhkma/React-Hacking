import { all } from 'redux-saga/effects'
import TodoList from './todoList'

export default function* rootSaga() {
  yield all([
    TodoList(),
  ])
}