import UserReducer from './UserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user_reducer: UserReducer
})

export default rootReducer;
