// Context들을 생성해둔 파일

import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set) => ({
  // 정적인 값들
  store: initialState.store,
  menus: initialState.menus,

  // 값 변경을 위해 필요한 함수들
  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
}));

export default useCartStore;
