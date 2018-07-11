import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  weather: reducer,
});

export default rootReducer;