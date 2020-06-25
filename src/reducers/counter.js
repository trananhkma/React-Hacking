const InitState = {value: 0, cde: 0, xyz:"zxd"}

export default function counter(state = InitState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1
      }
    case 'DECREMENT':
      return {
        value: state.value - 1
      }
    default:
      return state
  }
}