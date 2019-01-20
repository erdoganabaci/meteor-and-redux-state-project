// Define reducers
export default function operationReducer(state = {}, action = {} ) {
  switch (action.type) {
    case 'CHANGE_OPERATION':
      if (action.operation === 'Add')
        return (x,y) => x+y;
      else if (action.operation === 'Subtract')
        return (x,y) => x-y;
      else if (action.operation === 'Multiply')
        return (x,y) => x*y;
      else
        return (x,y) => x/y;
      break;
    default:
      return state;
  }
}
