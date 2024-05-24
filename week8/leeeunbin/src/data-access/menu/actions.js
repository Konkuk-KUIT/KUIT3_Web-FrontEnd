export const SET_STORE = 'SET_STORE';
export const ADD_MENU = 'ADD_MENU';

export const setStore = (menu) => ({
  type : SET_STORE,
  payload : menu,
})

export const addMenu = (menu) => ({
  type : ADD_MENU,
  payload : menu,
})

