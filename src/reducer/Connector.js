import {combineReducers} from 'redux';
import userReducer from '../controller/DataUser';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
