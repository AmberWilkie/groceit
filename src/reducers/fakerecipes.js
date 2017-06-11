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
      console.log(action.payload);
      console.log(state);
      // We're going to have to have a different method for this -
      // recipes and items are on differnet "levels" of their respective objects.
      return state.filter((recipe) => recipe.id !== action.payload );
    default:

      return state
  }
}