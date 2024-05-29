import React from "react";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const UpperBar = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
border-bottom: 16px solid #ddd;
padding: 10px 20px; 
`
const BackButton = styled.button`
background-color:transparent;
border: none;
cursor: pointer;
padding: 10px;
display: flex;
align-items: center;

img {
  width: 24px;
  height: 24px;
}
`
const ResetButton = styled.button`
background-color:transparent;
border: none;
cursor: pointer;
padding: 10px;
font-weight: 600;
font-size: 16px;
line-height: 19.09px;
`
const PriceBar=styled.div`
display: flex;
flex-grow: 1;
flex-direction:column;
border-top: 16px solid #ddd;
`

const BottomBar=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const PayButton=styled.div`
background-color: ${(props) => (props.disabled ? '#a0c4ff' : 'rgba(49,130,246,1)')};
color:white;
border: none;
cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
padding: 10px;
display: flex;
width: 100%;
align-items: center;
justify-content: center;
border-radius: 8px;
`

const StoreInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  width: 100%;
  box-sizing: border-box;
`;

const BackToStore=styled.div`
background-color: white;
color:rgba(49,130,246,1);
cursor: pointer;
padding: 10px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 8px;
border: 1px solid #ddd;
`
const LeastAlert=styled.span`
color:red;
`
const Cart = () => {
  const navigate = useNavigate();
  const cart=useCartStore((state)=>state.menus);
  const orderPrice=useCartStore((state)=>state.orderPrice);
  const totalPrice=useCartStore((state)=>state.totalPrice);
  const store=useCartStore((state)=>state.store);
  const deliveryFee=useCartStore((state)=>state.deliveryFee);
  const minDeliveryPrice=useCartStore((state)=>state.minDeliveryPrice);

  const isOrderable=orderPrice>=(store ? store.minDeliveryPrice:0);

  const handleOrder = () => {
    navigate(-1);
  };

  return (
    <>
    <UpperBar>
      <BackButton className="backbutton" type="button" onClick={() => navigate(-1)}>
        <img src="/backarrow.svg" alt="SVG Icon"></img>
      </BackButton>
      <ResetButton onClick={()=>useCartStore.getState().clearCart()}>
        주문취소
      </ResetButton>
    </UpperBar>
    <StoreInfoBar>
        {store && <span>{store.name}</span>}
        {!isOrderable && <LeastAlert>최소 금액 미달<img src="/PriceAlert.svg"></img></LeastAlert>}
    </StoreInfoBar>
        <ul>
          {cart.map((item)=>(
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.ingredients}</div>
              <div>{item.price}원</div>
            </div>     
          ))}
        </ul>
        <BackToStore onClick={handleOrder} type="button">
          + 더 담기
        </BackToStore>
      <PriceBar>
        <div>주문금액: {orderPrice}원</div>
        <div>배달요금: {deliveryFee}원</div>
        <div>총 결제금액: {totalPrice}원</div>
      </PriceBar>
      <BottomBar>
        <div>최소 주문 금액 {minDeliveryPrice}원 </div>
        <PayButton type="button" disabled={!isOrderable}>
          {totalPrice}원 결제하기
        </PayButton>
      </BottomBar>
    </>
  );
};

export default Cart;
