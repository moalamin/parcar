import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import userReducer from "./reducers/user.reducer";
import mapReducer from "./reducers/map.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  map: mapReducer
})

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)

