import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import TopBar from "../../components/topBar/topBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";
import starSVG from "../../assets/yellowStar.svg"
import { insertComma } from "../../store/insertComma";

const StyledTop = styled.div`
  height: 88px;
`;

const StyledHeader = styled.header`
  position:relative;
  border-bottom: 1px solid #E5E8EB;
`;


const StyledNameCover = styled.div`
  height:59px;
  position:relative;
`;

const StyledStoreName = styled.span`
  position: absolute;
  top:26px;
  left:24px;

  font-size: 26px;
  font-weight: 700;
  line-height: 31.03px;
  text-align: left;
`;

const StyledStoreDescriptionCover = styled.div`
  height:38px;
  position:relative;
`;

const StyledImg = styled.img`
  position:absolute;
  width: 18px;
  height: 19px;
  top: 7px;
  left: 23px;
  gap: 0px;
  opacity: 0px;
`;

const StyledRate = styled.div`
  position:absolute;
  top:6px;
  left:46px;

  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
`;

const StyledReview = styled.div`
  position:absolute;
  width: 69px;
  height: 19px;
  top: 7px;
  left: 81px;
  gap: 0px;
  opacity: 0px;

  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  text-align: left;
`;

const StyledPaymentCover = styled.div`
  position:relative;
  height:28px;
`;

const StyledMinPrice = styled.div`
  position:relative;
  height:28px;
`;

const StyledDeliveryTime = styled.div`
  position:relative;
  height:41px;
`;

const StyledOrderDetails = styled.div`
  position:absolute;
  width: 52px;
  height: 18px;
  top: 9px;
  left: 24px;
  gap: 0px;
  opacity: 0px;

  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
`;

const StyledAttributes = styled.div`
  position:absolute;
  width: 150px;
  height: 18px;
  top: 9px;
  left: 88px;
  gap: 0px;
  opacity: 0px;

  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
`;

const StyledCategory = styled.span`
  position:absolute;
  width: 45px;
  height: 20px;
  top: 308px;
  left: 24px;
  gap: 0px;
  opacity: 0px;

  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
`;

const StyledMenuSection = styled.section`
  position:absolute;
  top:339px;
`;

const StyledGapForBar = styled.div`
  height:111px;
`;

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
    <>
      <TopBar />
      <StyledHeader>
        <StyledNameCover>
          <StyledStoreName>{store.name}</StyledStoreName>
        </StyledNameCover>
        <StyledStoreDescriptionCover>
          <StyledImg src={starSVG} alt="star" /><StyledRate>{store.rate}</StyledRate><StyledReview>리뷰{insertComma(store.reviewCnt)}</StyledReview>
        </StyledStoreDescriptionCover>
        <StyledPaymentCover><StyledOrderDetails>결제방법</StyledOrderDetails><StyledAttributes>토스결제만 현장결제 안됨</StyledAttributes></StyledPaymentCover>
        <StyledMinPrice><StyledOrderDetails>최소주문</StyledOrderDetails><StyledAttributes>{insertComma(store.minDeliveryPrice)}원</StyledAttributes></StyledMinPrice>
        <StyledDeliveryTime><StyledOrderDetails>배달시간</StyledOrderDetails><StyledAttributes>약 {store.minDeliveryTime}~{store.maxDeliveryTime}분</StyledAttributes></StyledDeliveryTime>
      </StyledHeader>
      <StyledCategory>샐러드</StyledCategory>
      <StyledMenuSection>
        {store.menus.map((menu) => {
          return (
            <>
              <MenuItem key={menu.id} menu={menu} />
            </>
          );
        })}
        {/* 메뉴가 바에 가려 안 보이는 부분을 위해 공백 추가 */}
        <StyledGapForBar></StyledGapForBar>
      </StyledMenuSection>
      <OrderBar />
    </>
  );
};

export default Store;
