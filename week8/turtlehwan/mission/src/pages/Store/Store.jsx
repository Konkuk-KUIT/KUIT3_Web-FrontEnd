import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

import * as S from "../Stores/Stores.styles";
import { StoreHeader } from "../Stores/Stores";

import * as SS from "./Store.styles";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);
  const setStore = useCartStore((state) => state.setStore);
  const resetMenu = useCartStore((state) => state.resetMenu);
  const zstore = useCartStore((state) => state.store);

  useEffect(() => {
    if (store) {
      setStore(store);
      if (zstore !== store) resetMenu(); //다른 상점으로 이동할 때만 금액 초기화
    }
  }, [store]);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <StoreHeader />
      <S.Title>{store.name}</S.Title>
      <SS.Detail>
        <p className="rate">
          ⭐{store.rate} 리뷰
          {store.reviewCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p className="pay">결제방법 토스결제만 현장결제 안됨</p>
        <p className="minDeliveryPrice">
          최소주문{" "}
          {store.minDeliveryPrice
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </p>
        <p className="deliveryTime">
          배달시간 약 {store.minDeliveryTime}~{store.maxDeliveryTime}분
        </p>
      </SS.Detail>
      <SS.Menu>
        <p className="tag">샐러드</p>
        <div>
          {store.menus.map((menu) => {
            return <MenuItem key={menu.id} menu={menu} />;
          })}
        </div>
      </SS.Menu>
      <OrderBar />
    </div>
  );
};

export default Store;
