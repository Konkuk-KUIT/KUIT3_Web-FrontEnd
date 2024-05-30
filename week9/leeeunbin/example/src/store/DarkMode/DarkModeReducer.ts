import { DARK_MODE, DarkModeAction } from './action';
import { AppState } from './AppState';

const initialState: AppState = {
  darkMode: false,
};

const darkModeReducer = (state: AppState = initialState, action: DarkModeAction): AppState => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;