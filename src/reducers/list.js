import { ADD_ITEM } from '../actions';

const initialState = {
  data: [],
  rotation: '90'
}

export default function list (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default:
      return state;
  }
}