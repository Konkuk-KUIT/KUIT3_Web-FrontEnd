export const SET_MENU = 'SET_MENU';
export const ADD_MENU = 'ADD_MENU';

export const setMenu = (menu) => ({
  type : SET_MENU,
  payload : menu,
})

export const addMenu = (menu) => ({
  type : ADD_MENU,
  payload : menu,
})

