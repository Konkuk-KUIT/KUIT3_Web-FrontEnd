import { SET_STORE, ADD_MENU } from './actions';

const initialState = {
  store: [],
  menu: [
    {
      id : 0,
      category : "",
      name : "",
      price : 0,
      ingredients : []
    },
  ],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
      return {
        ...state,
        store: action.payload,
      };
    case ADD_MENU:
      return {
        ...state,
        menu: [...state.menu, action.payload], // Push the new menu item to the menu array
      };
    default:
      return state;
  }
};

export default menuReducer;

