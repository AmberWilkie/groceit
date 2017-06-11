import { REMOVE_ITEM } from '../actions'

const initialState = [
    {
      id: 1,
      name: 'Tomatoes',
      quantity: 2,
      category: 'Fruit & Veg'
    },
    {
      id: 2,
      name: 'Grapes',
      quantity: 1,
      category: 'Fruit & Veg'
    },
    {
      id: 3,
      name: 'Milk',
      quantity: 1,
      category: 'Dairy'
    }
  ]

export default function fakelist (state = initialState, action) {
  switch (action.type) {
    case REMOVE_ITEM:

      let items;
      if (state) {
        items = state.filter((item) => item.id !== action.payload)
      } else {
        items = []
      }
      console.log('fakelist state: ', state);
      return items;

    default:
      return state
  }
}