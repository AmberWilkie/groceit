import { ADD_ITEM, REQUEST_LIST } from '../actions';

const initialState = {}

export default function list (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case REQUEST_LIST:
      // here we'll make the request for items from the server
      return {
        ...state
      }
    default:
      return state;
  }
}