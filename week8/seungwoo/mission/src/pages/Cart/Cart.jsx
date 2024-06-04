import React from "react";
import useCartStore from "../../store/useCartStore";
import { insertComma } from "../../store/insertComma";

import styled from "styled-components";
import Warning from "../../assets/warning.svg";
import BackArrow from "../../assets/backarrow.svg";
import TopBar from "../../components/TopBar/TopBar";

const StyledSection = styled.section`
  position:absolute;
  top:88px;
`;

const StyledMyOrder = styled.div`
  position:relative;
  border-top: 16px solid #F2F4F6;
`;

const StyledStoreName = styled.span`
  position:absolute;
  white-space:nowrap;
  top: 26px;
  left: 24px;
  gap: 0px;
  opacity: 0px;

  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  text-align: left;
  color:#6B7684;
`;

const StyledIsLess = styled.div`
  position:absolute;
  width: 82px;
  height: 18px;
  top: 27px;
  left: 264px;
  gap: 0px;
  opacity: 0px;

  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: right;
  color: #F04452;
`;

const StyledMinimumFeeWarning = styled.div`
  display:flex;
  flex-direction:row;
`;

const StyledWarningDescription = styled.span`
  white-space:nowrap;
  margin: 0px 6px 0px 0px;
`;



const StyledImg = styled.img`
  position:absolute;
  width: 54px;
  height: 54px;
  top: 24px;
  left: 24px;
  gap: 0px;
  border-radius: 8px;
  opacity: 0px;
`;

const StyledMenuName = styled.span`
  position:absolute;
  white-space:nowrap;
  top: 16px;
  left: 95px;
  gap: 0px;
  opacity: 0px;

  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  text-align: left;
  color:#333D4B;
`;

const StyledAddedIngredients = styled.div`
  position:absolute;

  width:210px;
  top: 41px;
  left: 94px;
  gap: 0px;
  opacity: 0px;

  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
  color:#6B7684;
`;

const StyledMenuPrice = styled.span`
  position:absolute;
  white-space:nowrap;

  top: 78px;
  left: 93px;
  gap: 0px;
  opacity: 0px;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
  color: #6B7684;
`;

const StyledMenuCount = styled.span`
  position:absolute;
  white-space:nowrap;

  top: 46px;
  left: 320px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  color: #6B7684;
`;

const StyledDetailButtonImg = styled.img`
  width:6.63px;
  height:11.65px;
  transform:rotate(-180deg);

  fill: #6B7684;
`;

const StyledMenuList = styled.section`
  position:relative;
  top:58px;
`;

const StyledMenuContainer = styled.div`
  position: relative;
  height:110px;
`;

const StyledMenuDetailButton = styled.button`
  position:absolute;
  top:48px;
  left:370px;

  width:16px;
  height:16px;
  padding: 0;

  display:flex;
  justify-content:center;
  align-items:center;
  background-color:transparent;
  border:none;

  &:hover {
    cursor:pointer;
  }
`;

const StyledAddMenuButton = styled.button`
  width:390px;
  height:59px;
  border-top: 1px solid #E5E8EB;
  border-left:0;
  border-right:0;
  border-bottom:16px solid #F2F4F6;

  box-sizing:content-box;
  background:none;
`;

const StyledOrderDetails = styled.div`
  height:147px;
  border-top: 16px solid #FFFFFF;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: left;
`;

const StyledDetailName = styled.span`
  position:absolute;
  top:8px;
  left:24px;
  color:#8B95A1;
`;

const StyledAttributeValue = styled.span`
  position:absolute;
  top:8px;
  right:23px;

  color:#4E5968;

`;

const StyledDetailContainer = styled.div`
  position:relative;
  height:38px;

  &:last-child {
    height:54px;
    
    ${StyledDetailName} {
      top:16px;
      left:24px;
      color: #4E5968;
    }

    ${StyledAttributeValue}{
      top:16px;
      font-weight:600;
    }
  }

`;

const StyledFooter = styled.footer`
  position:fixed;
  width:390px;
  height:129px;
  bottom:0px;
`;

const StyledMinDeliveryPrice = styled.div`
  width:auto;
  text-align:center;

  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: center;
  color:#6B7684;
`;

const StyledPayButton = styled.button`
  position:absolute;
  top:39px;

  border:none;
  margin-left:20px;
  width:350px;
  height:56px;
  border-radius:16px;

  color:white;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  text-align: center;
background-color: ${(props) => (props.disabled ? 'gray' : '#3182F6')};
`;


export const Cart = () => {
  const { store, menus } = useCartStore((state) => ({
    store: state.store,
    menus: state.menus,
  }));

  const sumOfPrice = menus.reduce((acc, cur) => acc + cur.price*cur.count, 0);

  const isMinOrderMet = sumOfPrice >= store.minDeliveryPrice;

  return (
    <>
      <TopBar />
      <StyledSection>
        <div>
          <StyledMyOrder>
            <StyledStoreName>{store.name}</StyledStoreName>
            <StyledIsLess>
              {sumOfPrice >= store.minDeliveryPrice ? (
                ""
              ) : (
                <StyledMinimumFeeWarning>
                  <StyledWarningDescription>최소금액 미달</StyledWarningDescription>
                  <img src={Warning} alt="!" />
                </StyledMinimumFeeWarning>
              )}
            </StyledIsLess>
            <StyledMenuList>
            {menus.map((menu) => {
              return (
                <StyledMenuContainer>
                  <StyledImg src="http://via.placeholder.com/54x54"></StyledImg>
                  
                    <StyledMenuName>{menu.name}</StyledMenuName>
                    <StyledAddedIngredients>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</StyledAddedIngredients>
                    <StyledMenuPrice>{insertComma(menu.price)}원</StyledMenuPrice>
                  
                  
                    <StyledMenuCount>{menu.count}개</StyledMenuCount>
                    <StyledMenuDetailButton><StyledDetailButtonImg src={BackArrow} alt="" /></StyledMenuDetailButton>
                  
                </StyledMenuContainer>
              );
              
            })}
            <StyledAddMenuButton>
            더 담기 <img src="" alt="" />
          </StyledAddMenuButton>
          <StyledOrderDetails>
          <StyledDetailContainer>
            <StyledDetailName>주문금액</StyledDetailName>
            <StyledAttributeValue>{insertComma(sumOfPrice)}원</StyledAttributeValue>
          </StyledDetailContainer>
          <StyledDetailContainer>
            <StyledDetailName>배달요금</StyledDetailName>
            <StyledAttributeValue>{insertComma(store.deliveryFee)}원</StyledAttributeValue>
          </StyledDetailContainer>
          <StyledDetailContainer>
            <StyledDetailName>총 결제금액</StyledDetailName>
            <StyledAttributeValue>{insertComma(sumOfPrice + store.deliveryFee)}원</StyledAttributeValue>
          </StyledDetailContainer>
        </StyledOrderDetails>
            </StyledMenuList>
            
          </StyledMyOrder>
          
        </div>

      </StyledSection>
      <StyledFooter>
        {isMinOrderMet ? (
          <StyledMinDeliveryPrice>최소 주문금액 충족함</StyledMinDeliveryPrice>
        ) : (
          <StyledMinDeliveryPrice>최소 주문금액 {insertComma(store.minDeliveryPrice)}원</StyledMinDeliveryPrice>
        )}
        <StyledPayButton disabled={!isMinOrderMet}>
          {insertComma(sumOfPrice + store.deliveryFee)}원 결제하기
        </StyledPayButton>
      </StyledFooter>
    </>
  );
};

export default Cart;
