import TYPE from '../actions';

const initialState = {tasks:[], dataRequesting: false, error: null}

const TodoList = (state = initialState, action) => {
  switch (action.type) {
    // Get Task
    case TYPE.GET_TASK_REQUESTING:
      return {
        ...state,
        dataRequesting: true
      };
    case TYPE.GET_TASK_SUCCESS:
      return {
        ...state,
        dataRequesting: false,
        tasks: action.data
      };
    case TYPE.GET_TASK_FAIL:
      return {
        ...state,
        dataRequesting: false,
        tasks: initialState.tasks,
        error: 'LẤY DATA THẤT BẠI'
      };

    default: 
      return state
  }
};

export default TodoList;