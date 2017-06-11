import { combineReducers } from 'redux';
import ListReducer from './list';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';
import FakeList from './fakelist';
import FakeRecipes from './fakerecipes';
import Auth from './auth';

const rootReducer = combineReducers({
  auth: Auth,
  items: FakeList,
  recipes: FakeRecipes,
  form: FormReducer,
  list: ListReducer,
  router: routerReducer
});

export default rootReducer;