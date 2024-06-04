import { ADD_ORDER, UPDATE_TO_RIDER ,UPDATE_TO_OWNER, UPDATE_TO_PAYMENTMETHOD, UPDATE_ADDRESS, UPDATE_PHONENUM } from './actions';

const initialState = {
  address : "한남중앙로 40길 (한남 빌리지)",
  toRider : "",
  phoneNum : "010-1234-5678",
  toOwner: "",
  paymentMethod: "",
  orders: [
    {
      id : 0,
      category : "",
      name : "",
      price : 0,
      ingredients : []
    },
  ],
  deliveryFee : 0,
  orderPrice: 0,
  totalPrice : 0,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        deliveryFee: action.payload.deliveryFee,
        orderPrice: action.payload.orderPrice,
        totalPrice: action.payload.totalPrice,
        };
      case UPDATE_TO_RIDER:
        return {
          ...state,
          toRider: action.payload,
        }
      case UPDATE_TO_OWNER:
        return {
          ...state,
          toOwner: action.payload,
        }
      case UPDATE_TO_PAYMENTMETHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        }
      case UPDATE_ADDRESS:
        return {
          ...state,
          address: action.payload,
        }
      case UPDATE_PHONENUM:
        return {
          ...state,
          phoneNum : action.payload,
        }
    default:
      return state;
  }
};

export default orderReducer;
