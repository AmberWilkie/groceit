import { REMOVE_RECIPE_ITEM } from '../actions'

const fakeRecipes = [
  {
    id: 1,
    name: 'Breakfast',
    items: [
      {
        id: 3,
        name: 'Milk',
        quantity: 1,
        category: 'Dairy'
      },
      {
        id: 4,
        name: 'Cereal',
        quantity: 1,
        category: 'Dry'
      }
    ]
  },
  {
    id: 2,
    name: 'Caprese',
    items: [
      {
        id: 1,
        name: 'Tomatoes',
        quantity: 2,
        category: 'Fruit & Veg'
      },
      {
        id: 5,
        name: 'Mozzarella',
        quantity: 2,
        category: 'Dairy'
      }
    ]
  }
]

const initialState = fakeRecipes;

export default function fakerecipes (state = initialState, action) {
  switch (action.type) {
    case REMOVE_RECIPE_ITEM:
      return state;
    default:
      console.log('anything?')

      return state
  }
}