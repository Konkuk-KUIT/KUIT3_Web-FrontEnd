import { UPDATE_NAME, UPDATE_PASSWORD, UPDATE_EMAIL } from "./actions";

const initialState = {
  name : "user123",
  password : "",
  email : "user123@example.com",
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name : action.payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      }
    default:
      return state;
  }
}

export default userReducer;