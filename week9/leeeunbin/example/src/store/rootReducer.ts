import { combineReducers } from 'redux';
import darkModeReducer from './DarkMode/DarkModeReducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

export default rootReducer;
