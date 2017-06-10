import { SIGN_IN, SIGN_OUT } from '../actions';

const initialState =  {
  authenticated: false
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state, authenticated: true
      };
    case SIGN_OUT:
      return {
        ...state, authenticated: false
      };
    default:
      return state;
  }
}