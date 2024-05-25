import { create } from "zustand";
// createContext와 같다

const initialState = {
  store: undefined,
  menus: [],
  isStoreChanged: false
};

const useCartStore = create((set) => ({
  //초기값 설정함
  store: initialState.store,
  menus: initialState.menus,
  isStoreChanged: initialState.isStoreChanged,

  // store 과 menus 변경시키는 함수
  // state: 이전의 state 값
  addMenu: (menu) => {
    set((state) => {
      if (state.isStoreChanged) {
        if(window.confirm('주문서에는 같은 가게만 담을 수 있어요. 새로 담고 이전에 담은 메뉴는 삭제할까요?')){
          state.menus = [];
          state.isStoreChanged = false;
        } else {
          return {state};
        }
      }
      const existingMenu = state.menus.find((m) => m.id === menu.id);
      if (existingMenu) {
        // 중복된 메뉴의 count 증가
        existingMenu.count += 1;
        return { ...state, menus: [...state.menus] };
      } else {
        // 새로운 메뉴 추가
        menu.count = 1;
        return { ...state, menus: [...state.menus, menu] };
      }
    });
  },

  setStore: (store) => {
    set((state) => {
      if (state.store && state.store != store){
        state.isStoreChanged = true;
      }

      return { ...state, store: store };
    });
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
