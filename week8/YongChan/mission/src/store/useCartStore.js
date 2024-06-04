import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  orderPrice: 0,
  totalPrice: 0,
  deliveryFee: 0,
  minDeliveryPrice: 0,
  quantity:0,
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
  orderPrice: initialState.orderPrice,
  totalPrice: initialState.totalPrice,
  deliveryFee: initialState.deliveryFee,
  minDeliveryPrice: initialState.minDeliveryPrice,
  quantity:initialState.quantity,

  addMenu: (menu) => {
    set((state) => {
      // if(state.store && state.storeId!==menu.storeId){
      //   alert('다른 가게의 메뉴가 이미 담겨있습니다.');
      //   return state;
      // };

      const newOrderPrice=state.orderPrice+menu.price;
      const deliveryFee = state.store ? state.store.deliveryFee : 0;
      const newTotalPrice = newOrderPrice + deliveryFee;
      return {
        ...state,
        store: state.store || menu.store,
        menus: [...state.menus, menu],
        orderPrice: newOrderPrice,
        totalPrice: newTotalPrice,
      };
    });
  },

  setStore: (store) => {
    set((state) => {
      const deliveryFee = store ? store.deliveryFee : 0;
      const newTotalPrice = state.orderPrice + deliveryFee;
      const minDeliveryPrice = store ? store.minDeliveryPrice : 0;
      return {
        ...state,
        store: store,
        deliveryFee: deliveryFee,
        totalPrice: newTotalPrice,
        minDeliveryPrice: minDeliveryPrice,
      };
    });
  },

  setPrice: (price) => {
    set((state) => {
      const deliveryFee = state.store ? state.store.deliveryFee : 0;
      const newTotalPrice = price + deliveryFee;
      return {
        ...state,
        orderPrice: price,
        totalPrice: newTotalPrice,
      };
    });
  },

  clearCart: () => {
    if(window.confirm('정말로 장바구니를 초기화하겠습니까?')){
      set({
        store: undefined,
        menus: [],
        orderPrice: 0,
        totalPrice: 0,
        deliveryFee: 0,
        minDeliveryPrice: 0,
      });
    }
  },
}));

export default useCartStore;
