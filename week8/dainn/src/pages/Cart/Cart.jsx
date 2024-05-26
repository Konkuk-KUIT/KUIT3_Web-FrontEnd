import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";
import OrderMenu from "../../components/OrderMenu/OrderMenu";

const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const totalPrice = menus.reduce((total, menu) => total + menu.price, 0);
  const deliveryFee = store.deliveryFee;
  console.log(menus)
  console.log(store)
  
  const StyledDiv = styled.div`
    width: Hug (390px)px;
    height: Hug (422px)px;
    top: 88px;
    gap: 0px;
    opacity: 0px;

    display: flex;
    flex-direction: column;
  
  `
  const StyledOrderInfo = styled.div`
  gap: 0px;
  opacity: 0px;
`


  const StyledStoreName = styled.div`
  height: 20px;
  margin-top: 26px;
  margin-left: 24px;
  gap: 0px;
  opacity: 0px;

  font-family: Pretendard;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  text-align: left;

  color: #6B7684;
  `

  const StyledMenu = styled.div`

  height: 110px;
  top: 58px;
  gap: 0px;
  opacity: 0px;

  padding-top: 16px;
  padding-left: 24px;
  `

  const Styledul = styled.div`
    width: 390px;
    height: 110px;
    padding-left: 24px;
    padding-top:
  `

const StyledImg = styled.img`
  width = 54px;
  height =54px;
  background: #ECECEC;

`

  const StyledP = styled.div`
  height: 20px;
  margin-top: 5px;
  margin-left: 95px;
  gap: 0px;
  opacity: 0px;

  font-family: Pretendard;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  text-align: left;
  `

  const StyledP1 = styled.div`
    width: 210px;
    height: 32px;
    margin-top: 5px;
    margin-left: 94px;
    gap: 0px;
    opacity: 0px;
    color: #6B7684;


    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;
    text-align: left;
  
  `

  const StyledTotal = styled.div`
  display:flex;
  justify-content:  space-between;
  width: 390px;
  height: 38px;
  gap: 0px;
  opacity: 0px;
  color: #505967;
  `
  const StyledP2 = styled.div`
  width: 59px;
  height: 20px;
  margin-top: 8px;
  margin-left: 24px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: left;

  color: #8B95A1;

  `

  const StyledP3 = styled.div`
  width: 69px;
  height: 20px;
  margin-top: 9px;
  margin-left: 215px;
  gap: 0px;
  opacity: 0px;

  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: right;
  color: #505967;
  `
  const StyledTotal1 = styled.div`
  display:flex;
  justify-content:  space-between;
  width: 390px;
  height: 54px;

  gap: 0px;
  opacity: 0px;
  
  `
  const StyledP4 = styled.div`
  width: 78px;
  height: 20px;
  margin-top: 16px;
  margin-left: 24px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: left;
  color: #4E5968;

  `

  const StyledP5 = styled.div`
  width: 70px;
  height: 20px;
  margin-top: 16px;
  margin-left: 195px;
  gap: 0px;
  opacity: 0px;
  
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: right;
  color: #4E5968;
  `
    
  const StyleCartHeader= styled.div`
  width: 390px;
  display:flex;
  justify-content: space-between;
  

  `
  const StyleAlarm= styled.div`

  height: 18px;
  margin-top: 27px;
  margin-left: 147px;
  gap: 0px;
  opacity: 0px;


  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: right;
  color: #F04452;

  `



  console.log(menus.length)
  return (
    <StyledDiv>
      <StyledOrderInfo>
        <StyleCartHeader>
          <StyledStoreName>{store.name}</StyledStoreName>

          { totalPrice < store.minDeliveryPrice ? <StyleAlarm>최고 금액 미달</StyleAlarm> : null}
        </StyleCartHeader>
          {menus.map((menu, index) => (
            <Styledul>
            <StyledImg></StyledImg>
            <StyledP>{menu.name}</StyledP>
            <StyledP1>{menu.ingredients}</StyledP1>
            <StyledP1>{menu.price}원</StyledP1>
            {/* <li key={index}>{menu.name}: {menu.price}원</li> */}
            </Styledul>
          ))}
      

      </StyledOrderInfo>

        <StyledTotal>
              <StyledP2>주문금액</StyledP2>   <StyledP3>{totalPrice}</StyledP3>
        </StyledTotal>
        <StyledTotal>
              <StyledP2>배달요금</StyledP2>   <StyledP3>{deliveryFee}</StyledP3>
        </StyledTotal>
        <StyledTotal1>
        <StyledP4>총 결제금액</StyledP4>   <StyledP5>{totalPrice+deliveryFee}</StyledP5>
              {/* <StyledP4>총 결제금액</StyledP4>   <StyledP5>{deliveryFee}</StyledP5> */}
        </StyledTotal1>
      
      <OrderMenu/>
    </StyledDiv>



  )

};

export default Cart;
