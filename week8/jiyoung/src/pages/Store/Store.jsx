import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  StoreInfo,
  StoreName,
  StoreInfoTvBox,
  StoreInfoTv,
} from "./Store.styles";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

const Store = () => {
  const { storeId } = useParams(); // useParams로 storeId를 가져옴

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
      <StoreInfo>
        <StoreName>{store.name}</StoreName>

        <StoreInfoTvBox>
          <StoreInfoTv>결제방법</StoreInfoTv>
          <StoreInfoTv>{store.paymentMethod}</StoreInfoTv>
        </StoreInfoTvBox>
        <StoreInfoTvBox>
          <StoreInfoTv>최소주문</StoreInfoTv>
          <StoreInfoTv>{store.minDeliveryPrice}원</StoreInfoTv>
        </StoreInfoTvBox>
        <StoreInfoTvBox>
          <StoreInfoTv>배달시간</StoreInfoTv>
          <StoreInfoTv>
            약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
          </StoreInfoTv>
        </StoreInfoTvBox>
      </StoreInfo>

      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} store={store} />;
        })}
      </div>

      <OrderBar />
    </div>
  );
};

export default Store;
