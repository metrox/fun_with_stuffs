import { TOGGLE_BUTTON } from './actions'

let initialState = {
  buttonState: false
}

export default function(state=initialState, action) {
  switch(action.type) {
    case TOGGLE_BUTTON:
      return Object.assign({}, state, { buttonState: !state.buttonState })
    default:
      return state;
  }
}
