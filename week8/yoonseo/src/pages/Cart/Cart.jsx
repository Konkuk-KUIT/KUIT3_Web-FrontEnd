import React from "react";
import styled from "styled-components";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

import ic_arrow_back from "../../assets/ic_arrow_back.svg";
import ic_status_bar_time from "../../assets/ic_status_bar_time.svg";
import ic_status_bar_util from "../../assets/ic_status_bar_util.svg";
import ic_alert from "../../assets/ic_alert.svg";
import ic_store_rect from "../../assets/ic_store_rect.svg";
import ic_arrow_detail from "../../assets/ic_arrow_detail.svg";

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

const StyledBoldLine = styled.div`
  width: 100%;
  height: 16px;
  background-color: #F2F4F6;
  margin-bottom: 16px;
`;

const StyledName = styled.div`
  color: #6B7684;
  font-family: 'Pretendard', sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  text-align: left;
  margin-left: 24px;
  margin-top: 10px;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
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
  margin-top: 10px;
`;

const StyledAlertImage = styled.img`
  width: 13px;
  height: 13px;
  margin-top: 10px;
  margin-left: 6px;
  margin-right: 25px;
`;

const StyledCartItem = styled.div`
  width: 100%;
  heigth: 110px;
  display: flex;
  justify-content: space-between;
`;

const StyledDescription = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Pretendard', sans-serif;
`;

const StyledImg = styled.img`
  width: 54px;
  height: 54px;
  margin-left: 24px;
  margin-top: 19px;
`;

const StyledDetail = styled.div`
  margin-top: 16px;
  margin-left: 16px;
  flex-grow: 1;
`;

const StyledMenuName = styled.div`
  color: #333D4B;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  text-align: left;
`;

const StyledPrice = styled.div`
  margin-top: 5px;
  margin-bottom: 16px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
`;

const StyledIngredients = styled.div`
  margin-top: 5px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
`;

const StyledCount = styled.div`
  color: #6B7684;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  margin-top: 46px;
`;

const StyledDetailButton = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 48px;
  margin-left: 14px;
  margin-right: 20px;
`;

const StyledMore = styled.div`
  margin-top: 19px;
  margin-bottom: 20px;
  color: #3182F6;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E5E8EB;
`;

const StyledCalculation = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  padding: 9px 23px 9px 24px;
`;

const StyledCalName = styled.div`
  color: #8B95A1;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: left;
`;

const StyledCalPrice = styled.div`
  color: #505967;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: right;
`;

const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  height: 54px;
  font-family: 'Pretendard', sans-serif;
  padding: 16px 23px 18px 24px;
`;

const StyledTotalName = styled.div`
  color: #4E5968;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: left;
`;

const StyledTotalPrice = styled.div`
  color: #4E5968;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: right;
`;

const StyledFooterContainer = styled.div`
  position: fixed;
  bottom: 56px;
  width: 100%;
`;

const StyledMinDelivery = styled.div`
  width: 100%;
  color: #6B7684;
  font-family: 'Pretendard', sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: center;
`;

const StyledTotalButton = styled.div`
  width: calc(100% - 40px);
  height: 56px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.disabled ? '#D0DFFB' : '#3182F6'};
  border-radius: 16px;
  margin-top: 19px;
  margin-left: 20px;
  margin-right: 20px;
  color: #FFFFFF;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
`;


const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0) + store?.deliveryFee;
  const meetsMinPrice = totalPrice >= store?.minDeliveryPrice;

  let cartItems = menus.reduce((acc, item) => {
    const presentItems = acc.find((menu) => menu.id === item.id);
    if (presentItems) {
      presentItems += 1;
    } else {
      acc.push({ ...item, count: 1});
    }
    return acc;
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    if (store) {
      navigate(`../../store/${store.id}`);
    }
  };

  return (
    <div>
      <StyledStatusBar>
        <StyledStatusBarTime src={ic_status_bar_time} alt="status_bar_time"></StyledStatusBarTime>
        <StyledStatusBarUtil src={ic_status_bar_util} alt="status_bar_util"></StyledStatusBarUtil>
      </StyledStatusBar>

      <StyledAppBar>
        <StyledBackButton onClick={goBack} src={ic_arrow_back} alt="back_button"></StyledBackButton>
        <StyledCancelButton>주문취소</StyledCancelButton>
      </StyledAppBar>

      <StyledBoldLine />

      <StyledContainer>
        <StyledName>{store.name}</StyledName>
        {!meetsMinPrice && (
          <StyledAlertContainer>
            <StyledAlert>최소금액 미달</StyledAlert>
            <StyledAlertImage src={ic_alert} alt="alert"></StyledAlertImage>
          </StyledAlertContainer>
        )}
      </StyledContainer>
      {cartItems.map((menu) =>(
        <CartItem key={menu.id} menu={menu} count={menu.count}/>
      ))}

      <StyledLine />

      <StyledMore>더 담기 +</StyledMore>

      <StyledBoldLine />

      <StyledCalculation>
        <StyledCalName>주문금액</StyledCalName>
        <StyledCalPrice>{menus.reduce((acc, cur) => acc + cur.price, 0).toLocaleString()}원</StyledCalPrice>
      </StyledCalculation>

      <StyledCalculation>
        <StyledCalName>배달요금</StyledCalName>
        <StyledCalPrice>{store?.deliveryFee.toLocaleString()}원</StyledCalPrice>
      </StyledCalculation>

      <StyledTotal>
        <StyledTotalName>총 결제금액</StyledTotalName>
        <StyledTotalPrice>{totalPrice.toLocaleString()}원</StyledTotalPrice>
      </StyledTotal>

      <StyledFooterContainer>  
        <StyledMinDelivery>최소 주문금액 {store?.minDeliveryPrice.toLocaleString()}원</StyledMinDelivery>
        <StyledTotalButton type="button" disabled={!meetsMinPrice}>{totalPrice.toLocaleString()}원 결제하기</StyledTotalButton>
      </StyledFooterContainer>
    </div>
  );
};

const CartItem = ({ menu, count }) => {
  return (
    <div>
      <StyledCartItem>
        <StyledDescription>
          <StyledImg src={ic_store_rect} alt="menu_image"></StyledImg>
          <StyledDetail>
            <StyledMenuName>{menu.name}</StyledMenuName>
            <StyledIngredients>{menu.ingredients}</StyledIngredients>
            <StyledPrice>{menu.price.toLocaleString()}원</StyledPrice>
          </StyledDetail>
          <StyledCount>{count}개</StyledCount>
          <StyledDetailButton src={ic_arrow_detail} alt="detail_button"></StyledDetailButton>
        </StyledDescription>

      </StyledCartItem>
    </div>
  );
};

export default Cart;