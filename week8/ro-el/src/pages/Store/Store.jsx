import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

import YellowStar from "../../assets/star-yellow.svg";
import * as S from "./Store.styles.jsx";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);

  useEffect(() => {
    //나머지가 모두 실행된 이후에 실행
    if (store) {
      setStore(store);
    }
  }, [store]); //빈 배열인 경우, 처음 렌더링 될 때 한 번만 함수가 실행됨

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <S.StoreBox>
      <S.StoreInfoSection>
        <h1>{store.name}</h1>

        <S.StoreReviewContainerBox>
          <S.StoreReviewRateBox>
            <img src={YellowStar} alt="별" />
            <span>{store.rate}</span>
          </S.StoreReviewRateBox>
          <S.StoreReviewCountBox>
            <span>리뷰{store.reviewCnt}</span>
          </S.StoreReviewCountBox>
        </S.StoreReviewContainerBox>

        <S.StoreOrderContainerBox>
          <S.StoreOrderBox>
            <span>결제 방법</span>
            <span>토스결제만. 현장결제 불가능</span>
          </S.StoreOrderBox>
          <S.StoreOrderBox>
            <span>최소 주문</span>
            <span>{store.minDeliveryPrice}</span>
          </S.StoreOrderBox>
          <S.StoreOrderBox>
            <span>배달 시간</span>
            <span>
              약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
            </span>
          </S.StoreOrderBox>
        </S.StoreOrderContainerBox>
      </S.StoreInfoSection>

      <S.StoreMenuSection>
        <S.CategoryH3>샐러드</S.CategoryH3>
        <S.StoreMenuList>
          {store.menus.map((menu) => {
            return <MenuItem key={menu.id} menu={menu} />;
          })}
        </S.StoreMenuList>
      </S.StoreMenuSection>

      <OrderBar />
    </S.StoreBox>
  );
};

export default Store;
