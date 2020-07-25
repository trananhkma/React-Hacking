import { getTodo, addTodo, editTodo, deleteTodo } from '../request'
import { takeEvery, call, put, delay } from 'redux-saga/effects'

import TYPE from '../actions'

function* getTaskFlow() {
  try { 
    const response = yield call(getTodo)
    if (response.status === 200) {
      // yield delay(3000)
      yield put({ type: TYPE.GET_TASK_SUCCESS, data: response.data })
    } else {
      yield put({type: TYPE.GET_TASK_FAIL})
    }
  } catch (error) {
    yield put({type: TYPE.GET_TASK_FAIL})
  }
}

function* addTaskFlow(action) {
  try {
    const response = yield call(addTodo, {des: action.task})
    if (response.status === 200) {
      // Do something to refresh task list
      yield delay(1000)
    } else {
      yield put({type: TYPE.ADD_TASK_FAIL})
    }
  } catch (error) {
    yield put({type: TYPE.ADD_TASK_FAIL})
  }
}
  
function* TaskWatcher() {
  yield takeEvery(TYPE.GET_TASK_REQUESTING, getTaskFlow)
  yield takeEvery(TYPE.ADD_TASK_REQUESTING, addTaskFlow)
}

export default TaskWatcher