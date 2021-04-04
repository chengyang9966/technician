import { combineReducers } from 'redux';
import logReducer from './logReducer';
import TechReducer from './techReducer';
export default combineReducers({
  log: logReducer,
  tech: TechReducer,
});
