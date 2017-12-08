import {auth} from '../../firebase';
import {saveToAsyncStorage} from '../utils/auth';

export const LOGIN_USER = 'LOGIN_USER';
export function loginUser(email, password) {
  return (dispatch)=>{
    auth.signInWithEmailAndPassword(email, password)
      .then(user=>{
        dispatch(storeUser(user))   
      })
      .catch(e=>{
        console.warn(e)
      })
  }
}

export const SET_USER = 'SET_USER';
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  }
}

export const STORE_USER = 'STORE_USER';
export function storeUser(user) {
  return (dispatch) => {
    // raw user object as param
    saveToAsyncStorage(user)
    .then(()=>{
      dispatch(setUser(user))
    });
  }
}