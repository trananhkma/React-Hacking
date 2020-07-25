import actionType from '../actions'


const InitState = {items: []}
const {SELECT, REMOVE} = actionType

export default function checkout(state=InitState, action) {
  switch (action.type) {
    case SELECT:
      return {
        items: [
          ...state.items,
          action.item
        ]
      }
    case REMOVE:
      const index = getIndex(action.item.id, state.items, 'id')
      state.items.splice(index, 1)
      return {items: [...state.items]}
    default:
      return {items: [...state.items]}
  }
}

function getIndex(value, arr, prop) {
  for(var i = 0; i < arr.length; i++) {
      if(arr[i][prop] === value) {
          return i;
      }
  }
  return -1;
}