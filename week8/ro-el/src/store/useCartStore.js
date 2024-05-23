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
    //state: store, menus, addMenu, setStore 모두 포함
  },
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
}));

export default useCartStore;
