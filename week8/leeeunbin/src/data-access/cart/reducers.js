import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from './actions';

const initialState = {
  store : "",
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
      
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

      case RESET_CART:
        return {
          ...state,
          store : "",
          items: [],
        }
    default:
      return state;
  }
};

export default cartReducer;