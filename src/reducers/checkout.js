const InitState = {items: []}

export default function checkout(state=InitState, action) {
  switch (action.type) {
    case 'SELECT':
      return {
        items: [
          ...state.items,
          action.item
        ]
      }
    default:
      return state
  }
}