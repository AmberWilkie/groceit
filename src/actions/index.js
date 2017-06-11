export const ADD_ITEM = 'ADD_ITEM';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const REQUEST_LIST = 'REQUEST_LIST';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export function signIn() {
  return {
    type: SIGN_IN
  }
}

export function signOut() {
  return {
    type: SIGN_OUT
  }
}

export function requestList() {
  return {
    type: REQUEST_LIST
  }
}