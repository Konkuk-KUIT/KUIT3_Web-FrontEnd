import { create } from "zustand";

const initialState = {
  store: undefined, //초기화
  menus: [], //빈 배열로 초기화
  totalPrice: 0,
};


//상태관리 훅 생성
//create 함수는 zustand에서 제공함
//store와 menus 값음 위에 초기화 한 값으로 초기화 함
const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
  totalPrice: initialState.totalPrice,

  //store를 설정함
  //매개변수 store를 받아 set 함수를 통해 상태 업데이트
  //현재 state를 펼치고 store를 새로운 값으로 설정
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },


  //menu라는 매개변수를 받아 set 함수를 통해 상태 업데이트
  //현재 state를 펼치고 새로운 menu를 menus 배열에 추가
  //set 함수는 zustand에서 제공함
  //같은 메뉴가 추가되면 quantity를 하나 증가

  addMenu: (menu) => {
    set((state) => {
      const existingMenu = state.menus.find((m) => m.id === menu.id);

      if (existingMenu) {
        return {
          ...state,
          menus: state.menus.map((m) =>
            m.id === menu.id ? { ...m, quantity: m.quantity + 1 } : m
          ),
        };
      } else {
        return {
          ...state,
          menus: [...state.menus, { ...menu, quantity: 1 }],
        };
      }
    });
  },
  // addMenu: (menu) => {
  //   set((state) => ({ ...state, menus: [...state.menus, menu] }));
  // },

  clearCart: () => {
    set(() => ({ menus: [] }));
  },
}));

export default useCartStore;
