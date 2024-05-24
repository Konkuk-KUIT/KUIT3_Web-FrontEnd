import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  totalPrice: 0,
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
  totalPrice: initialState.totalPrice,

  addMenu: (menu) => {
    set((state) => ({
      ...state,
      menus: [...state.menus, menu],
      totalPrice: state.totalPrice + menu.price,
    }));
    //state: store, menus, totalPrice, addMenu, setStore 모두 포함
  },
  setStore: (store) => {
    set((state) => ({
      ...state,
      store: store,
      menus: initialState.menus,
      totalPrice: initialState.totalPrice,
    }));
    console.log("set store, reset price and menus");
  },
}));

export default useCartStore;
