// Define reducers
export default function numberoneReducer(state = {}, action = {} ) {
  switch (action.type) {
    case 'CHANGE_NUMBERONE':
      return parseInt(action.number);
      break;
    default:
      return state;
  }
}
