import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
  removeMenu: (menuId) => {
    set((state) => ({
      ...state,
      menus: state.menus.filter((menu) => menu.id !== menuId),
    }));
  },
}));

export default useCartStore;
