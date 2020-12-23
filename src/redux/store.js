import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './reducers/AuthReducer';
import listReducer from './reducers/ListReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  list: listReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;