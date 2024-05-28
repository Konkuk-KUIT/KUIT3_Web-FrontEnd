import React from "react";
import styled from "styled-components";
import useCartStore from "../../store/useCartStore";

import ic_arrow_back from "../../assets/ic_arrow_back.svg";
import ic_status_bar_time from "../../assets/ic_status_bar_time.svg";
import ic_status_bar_util from "../../assets/ic_status_bar_util.svg";
import ic_alert from "../../assets/ic_alert.svg";

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

const StyledAppBar = styled.div`
  width: 100%;  
  height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBackButton = styled.img`
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 7px;
  height: 24px;
`;

const StyledCancelButton = styled.div`
  width: 56px;
  color: #333D4B;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  text-align: left;
  margin-right: 15px;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 16px;
  background-color: #F2F4F6;
`;

const StyledName = styled.div`
  color: #6B7684;
  font-family: 'Pretendard', sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  text-align: left;
  margin-left: 24px;
  margin-top: 26px;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAlertContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAlert = styled.div`
  color: #F04452;
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: right;
  margin-top: 26px;
`;

const StyledAlertImage = styled.img`
  width: 13px;
  height: 13px;
  margin-top: 26px;
  margin-left: 6px;
  margin-right: 25px;
`;

const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0) + store.deliveryFee;

  return (
    <div>
      <StyledStatusBar>
        <StyledStatusBarTime src={ic_status_bar_time} alt="status_bar_time"></StyledStatusBarTime>
        <StyledStatusBarUtil src={ic_status_bar_util} alt="status_bar_util"></StyledStatusBarUtil>
      </StyledStatusBar>

      <StyledAppBar>
        <StyledBackButton src={ic_arrow_back} alt="back_button"></StyledBackButton>
        <StyledCancelButton>주문취소</StyledCancelButton>
      </StyledAppBar>

      <StyledLine />

      <StyledContainer>
        <StyledName>{store.name}</StyledName>
        <StyledAlertContainer>
          <StyledAlert>최소금액 미달</StyledAlert>
          <StyledAlertImage src={ic_alert} alt="alert"></StyledAlertImage>
        </StyledAlertContainer>
      </StyledContainer>
      
    </div>
  );
};

export default Cart;