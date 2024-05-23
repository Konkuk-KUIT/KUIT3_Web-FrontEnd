export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});