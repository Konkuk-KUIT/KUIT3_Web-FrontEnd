import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
};
// 초기 상태(비어있음)

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
// 초기값 설정

  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },
// 배열 menu에 새로운 요소 추가하는 함수
// ...state -> 기존 state의 요소 반환
// [...state.menus, menu] -> 기존 state의 menus 요소 + 새로운 menu 요소들 추가됨
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
// store: store -> 왼쪽의 store = initialState.store, 오른쪽의 store = 매개변수 (store)
}));

export default useCartStore;
