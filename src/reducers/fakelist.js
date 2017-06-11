import { REMOVE_ITEM } from '../actions'

const initialState = {
  items: [
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
}

export default function fakelist (state = initialState, action) {
  switch (action.type) {
    case REMOVE_ITEM:

      let filteredItems
      if (state.items) {
        filteredItems = state.items.filter((item) => {
          if (item.id !== action.payload) {
            return item
          }
        })
      } else {
        filteredItems = []
      }

      return {
        ...state,
        items: filteredItems
      }

    default:
      return state
  }
}