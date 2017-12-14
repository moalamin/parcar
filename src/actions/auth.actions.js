import {auth} from '../../firebase';
import {saveToAsyncStorage, checkAsyncStorageForUser} from '../utils/auth';

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = (email, password) => {
  return (dispatch) => {
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
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const STORE_USER = 'STORE_USER';
export const storeUser = (user) => {
  return (dispatch) => {
    // raw user object as param
    saveToAsyncStorage(user)
    .then(()=>{
      dispatch(setUser(user))
    });
  }
}

export const CHECK_ASYNC_USER = 'CHECK_ASYNC_USER';
export const checkStorageUser = () => {
  return (dispatch) => {
    checkAsyncStorageForUser()
      .then(response=>{
        if(response) {
          dispatch(setUser(JSON.parse(response)))
        }
      })
  }
}
