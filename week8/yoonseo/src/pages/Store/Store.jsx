import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

import ic_arrow_back from "../../assets/ic_arrow_back.svg";
import ic_status_bar_time from "../../assets/ic_status_bar_time.svg";
import ic_status_bar_util from "../../assets/ic_status_bar_util.svg";
import ic_star from "../../assets/ic_star.svg";

const StyledStatusBar = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
`;

const StyledStatusBarTime = styled.img`
  width: 100%;
  height: 21px;
  margin-top: 19px;
  margin-bottom: 7px;
`;

const StyledStatusBarUtil = styled.img`
  width: 100%;
  height: 13px;
  margin-top: 19px;
  margin-bottom: 19px;
`;

const StyledBackButton = styled.img`
  margin-left: 10px;
  margin-bottom: 10px;
  height: 24px;
`;

const StyledName = styled.div`
  margin-left: 24px;
  margin-top: 26px;
  color: #191F28;
  font-family: 'Pretendard', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.03px;
  text-align: left;
`;

const StyledRating = styled.div`
  display: flex;
  margin-top: 7px;
  font-family: 'Pretendard', sans-serif;
`;

const StyledStarRate = styled.div`
  margin-left: 23px;
  margin-bottom: 12px;
  color: #4E5968;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
`;

const StyledReview = styled.div`
  margin-left: 9px;
  color: #4E5968;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  text-align: left;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E5E8EB;
  margin-top: 14px;
`;

const StyledCategory = styled.div`
  margin-left: 24px;
  margin-top: 26px;
  color: #6B7684;
  font-family: 'Pretendard', sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
`;

const StyledDescription = styled.div`
  color: #4E5968;
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  margin-left: 24px;
  margin-top: 9px;
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
    <div>
      <StyledStatusBar>
        <StyledStatusBarTime src={ic_status_bar_time} alt="status_bar_time"></StyledStatusBarTime>
        <StyledStatusBarUtil src={ic_status_bar_util} alt="status_bar_util"></StyledStatusBarUtil>
      </StyledStatusBar>

      <StyledBackButton src={ic_arrow_back} alt="back_button"></StyledBackButton>

      <StyledName>{store.name}</StyledName>

      <StyledRating>
        <StyledStarRate><img src={ic_star} alt="star_rate"/> {store.rate}</StyledStarRate>
        <StyledReview>리뷰{store.reviewCnt.toLocaleString()}</StyledReview>
      </StyledRating>

      <StyledDescription>결제방법  토스결제만 현장결제 안됨</StyledDescription>
      <StyledDescription>최소주문  {store.minDeliveryPrice.toLocaleString()}원</StyledDescription>
      <StyledDescription>배달시간  약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</StyledDescription>

      <StyledLine />

      <StyledCategory>샐러드</StyledCategory>

      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>

      <OrderBar />
    </div>
  );
};

export default Store;