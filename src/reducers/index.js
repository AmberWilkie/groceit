import { combineReducers } from 'redux';
import ListReducer from './list';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  list: ListReducer,
  router: routerReducer
});

export default rootReducer;