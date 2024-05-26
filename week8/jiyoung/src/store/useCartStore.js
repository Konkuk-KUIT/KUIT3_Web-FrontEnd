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
    // ...state => 현재 메뉴 상태를 복사 / memu => 기존 memus 배열에 새로운 menu를 추가
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },
  setStore: (store) => {
    // ...state => 현재 가게 상태를 복사 / store: store => 기존 정보를 새로운 가게 정보로 설정해버림
    set((state) => ({ ...state, store: store }));
  },
  clearCart: () => {
    set(() => ({ store: undefined, menus: [] }));
  },
}));

export default useCartStore;
