import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";
import { insertComma } from "../../store/insertComma";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store]);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <h1>{store.name}</h1>
      <div><span>★</span><span>{store.rate}</span><span>리뷰{insertComma(store.reviewCnt)}</span></div>
      <div><span>결제방법</span><span>토스결제만 현장결제 안됨</span></div>
      <div><span>최소주문</span><span>{insertComma(store.minDeliveryPrice)}원</span></div>
      <div><span>배달시간</span><span>약 {store.minDeliveryTime}~{store.maxDeliveryTime}분</span></div>
      <div>
        {store.menus.map((menu) => {
          return (
            <>
              <MenuItem key={menu.id} menu={menu} />
            </>
          );
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
