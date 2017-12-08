import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
  user: userReducer
})

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)

