import { create } from "zustand";
// createContext와 같다

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set) => ({
  //초기값 설정함
  store: initialState.store,
  menus: initialState.menus,

  // store 과 menus 변경시키는 함수
  // state: 이전의 state 값
  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
}));

export default useCartStore;

// create 함수
// create 함수는 상태를 생성하는 데 사용됩니다. 
// 이 함수는 초기 상태와 상태 업데이트 함수를 정의하는 콜백을 인수로 받아, 
// 상태와 그 상태를 변경하는 메서드를 반환합니다.

// set 함수
// set 함수는 상태를 업데이트하는 데 사용됩니다. 
// set 함수는 상태를 변경하는 함수를 인수로 받습니다. 
// 이 함수는 현재 상태를 인수로 받아 새로운 상태를 반환합니다.