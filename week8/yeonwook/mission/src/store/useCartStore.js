import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  total: 0,
  newMenu: undefined
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
  total: initialState.total,
  newMenu: initialState.newMenu,

  addMenu: (menu) => {
    set((state) => ({
      ...state,
      menus: [...state.menus, menu],
      total: state.total + menu.price
    }));
  },
  resetMenu: ()=>{
    set((state)=>({...state, menus:[], total:0}))
  },
  setStore: (store) => {
      set((state) => ({ ...state, store: store }));
  },
  setNewMenu: (menu)=>{
    set((state)=>({...state, newMenu: menu}))
  }
}));

export default useCartStore;
