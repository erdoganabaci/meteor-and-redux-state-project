// Define reducers
export default function numbertwoReducer(state = {}, action = {} ) {
  switch (action.type) {
    case 'CHANGE_NUMBERTWO':
      return parseInt(action.number);
      break;
    default:
      return state;
  }
}
