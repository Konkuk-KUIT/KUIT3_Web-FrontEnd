import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";

const StyledDiv1 = styled.div`
  border-bottom: 1px solid #ccc;
  border-color: #E5E8EB;
`
const StyledDiv2 = styled.div`
  display: flex;
  margin-left: 24px;
`
const Title1 = styled.h1`
  margin-top: 26px;
  margin-left: 24px;
  margin-bottom: 2px;
  font-size: 26px;
  color: #191F28
`
const Title2 = styled.h3`
  margin-top: 26px;
  margin-left: 24px;
  margin-bottom: 2px;
  color: #6B7684
`
const Star = styled.div`
  margin-top: 7px;
  margin-left: 0px;
  font-weight: 600;
`
const StoreInfo1 = styled.div`
  margin-top: 7px;
  margin-left: 9px;
  margin-bottom: 12px;
  margin-right: 9px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  color: #4E5968;
`

const StoreInfo2 = styled.div`
  margin-top: 9px;
  margin-left: 0px;
  margin-bottom: 1px;
  margin-right: 12px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 15px;
  color: #4E5968;
`
const StoreInfo3 = styled.div`
  margin-top: 9px;
  margin-left: 0px;
  margin-bottom: 14px;
  margin-right: 12px;
  font-size: 15px;
  color: #4E5968;
`
const Circle = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background-color: #ECECEC;
  margin-top: 28px;
  margin-left: 24px;
  margin-bottom: 28px;
  margin-right: 16px;
`
const Food = styled.div`
  display: flex;
`


const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store]);

  // useEffect -> 나머지 내용들이 렌더링 된 후에 함수를 실행하고자 할 때 사용
  // useEffect((), []) -> (): 실행하고자 하는 함수, []: 의존성 배열(해당 변수가 바뀔 때마다 렌더링)

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <StyledDiv1>
        <Title1>{store.name}</Title1>
        <StyledDiv2>
          <Star>★ {store.rate}</Star> <StoreInfo1>리뷰{store.reviewCnt.toLocaleString("ko-KR")}</StoreInfo1>
        </StyledDiv2>
        <StyledDiv2>
          <StoreInfo2>결제방법</StoreInfo2> <StoreInfo2>토스결제만 현장결제 안됨</StoreInfo2>
        </StyledDiv2>
        <StyledDiv2>
          <StoreInfo2>최소주문</StoreInfo2> <StoreInfo2>{store.minDeliveryPrice.toLocaleString("ko-KR")}원</StoreInfo2>
        </StyledDiv2>
        <StyledDiv2>
          <StoreInfo3>배달시간</StoreInfo3> <StoreInfo3>약 {store.minDeliveryTime}분-{store.maxDeliveryTime}분</StoreInfo3>
        </StyledDiv2>
      </StyledDiv1>

      <Title2>샐러드</Title2>

      <div>
        {store.menus.map((menu) => {
          const storeMenu = {
            ...menu,
            storeId: store.id
          }
          return (
            <Food>
              <Circle />
              <div>
                <MenuItem key={menu.id} menu={storeMenu} />
              </div>
            </Food>
          )
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
