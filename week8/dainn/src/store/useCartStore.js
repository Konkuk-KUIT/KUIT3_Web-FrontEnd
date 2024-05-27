import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  storeId: -1,
//  totalPrice: 0,
};

const useCartStore = create((set) => ({

  store: initialState.store,
  menus: initialState.menus,
  storeId: initialState.storeId,
 // totalPrice: initialState.totalPrice,


  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu]}));
  },
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
  setStoreId: (storeId) => {
    set((state) => ({ ...state, storeId: storeId }));
  },
  getTotalPrice:(menus) => {
    set((state) => ({...state, totalPrice: menus.reduce((total, menu) => total + menu.price, 0)}))
    ;
  }
  

}),);

export default useCartStore;
