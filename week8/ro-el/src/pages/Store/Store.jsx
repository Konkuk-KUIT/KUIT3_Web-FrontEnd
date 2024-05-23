import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

import YellowStar from "../../assets/star-yellow.svg";

const StoreBox = styled.div`
  box-sizing: border-box;
`;

const StoreInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 26px 24px 14px;
  border-bottom: 1px solid #e5e8eb;

  h1 {
    font-family: "PretendardBold";
    font-size: 26px;
    line-height: 31.03px;
    text-align: left;
    margin: 0;
  }
`;

const StoreReviewContainerBox = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  gap: 9px;
  margin-bottom: 12px;
`;

const StoreReviewRateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 18px;
    height: 19px;
  }
  span {
    font-family: "PretendardSemiBold";
    font-size: 17px;
    color: #4e5968;
  }
`;

const StoreReviewCountBox = styled.div`
  font-family: "PretendardMedium";
  font-size: 16px;
  color: #4e5968;
`;

const StoreOrderContainerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoreOrderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 28px;
  color: #4e5968;
  font-size: 16px;
`;

const StoreMenuSection = styled.section`
  padding: 0 24px;
`;

const CategoryH3 = styled.h3`
  font-family: "PretendardSemiBold";
  font-size: 17px;
  color: #6b7684;
  margin: 0;
  padding: 26px 0 11px;
`;

const StoreMenuList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

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
    <StoreBox>
      <StoreInfoSection>
        <h1>{store.name}</h1>

        <StoreReviewContainerBox>
          <StoreReviewRateBox>
            <img src={YellowStar} alt="별" />
            <span>{store.rate}</span>
          </StoreReviewRateBox>
          <StoreReviewCountBox>
            <span>리뷰{store.reviewCnt}</span>
          </StoreReviewCountBox>
        </StoreReviewContainerBox>

        <StoreOrderContainerBox>
          <StoreOrderBox>
            <span>결제 방법</span>
            <span>토스결제만. 현장결제 불가능</span>
          </StoreOrderBox>
          <StoreOrderBox>
            <span>최소 주문</span>
            <span>{store.minDeliveryPrice}</span>
          </StoreOrderBox>
          <StoreOrderBox>
            <span>배달 시간</span>
            <span>
              약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
            </span>
          </StoreOrderBox>
        </StoreOrderContainerBox>
      </StoreInfoSection>

      <StoreMenuSection>
        <CategoryH3>샐러드</CategoryH3>
        <StoreMenuList>
          {store.menus.map((menu) => {
            return <MenuItem key={menu.id} menu={menu} />;
          })}
        </StoreMenuList>
      </StoreMenuSection>

      <OrderBar />
    </StoreBox>
  );
};

export default Store;

/*rate: 4.9,
  reviewCnt: 3919,
  minDeliveryTime: 13,
  maxDeliveryTime: 30,
  minDeliveryPrice: 13000,
  deliveryFee: 2000, */
