import React from "react";
import styled from "styled-components";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

const CartContainer = styled.div`
  background-color: #F2F4F6;
`;

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`
const StoreHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 26px;
  margin-left: 24px;
  margin-bottom: 12px;
  margin-right: 25px;
  font-size: 17px;
`
const Box = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  background-color: #ECECEC;
  margin-right: 10px;
`

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h3`
  margin: 0;
`

const ItemPrice = styled.p`
  margin: 0;
  color: #6b7684;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const StyledSpan1 = styled.span`
  margin-top: 8px;
  margin=left: 24px;
  margin-bottom: 10px;
  margin-right: 23px;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  color: #8B95A1;
`

const StyledSpan2 = styled.span`
  margin-top: 8px;
  margin=left: 24px;
  margin-bottom: 10px;
  margin-right: 23px;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  color: #4E5968;
`

const StyledSpan3 = styled.span`
  margin-top: 8px;
  margin=left: 24px;
  margin-bottom: 10px;
  margin-right: 23px;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  color: #4E5968;
`

const OrderBtn = styled.button`
  background-color: #3182F6;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #D0DFFB;
  }
  width: 350px;
height: 56px;
top: 39px;
left: 20px;
border-radius: 16px;
opacity: 0px;

`;

const AddMoreBtn = styled.button`
  padding: 5px 10px;
  background-color: white;
  color: #3182f6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;

  &:hover {
    background-color: #1a73e8;
  }
`

const Cart = () => {
  const navigate = useNavigate();
  const { store, menus, setStore, addMenu } = useCartStore();
  const handleOrder = () => {
    alert("주문이 완료되었습니다!")
  }

  const handleAddMore = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  const calculateTotals = () => {
    let orderTotal = 0;
    let deliveryFeeTotal = 0;
    if (store) {
      const storeTotal = menus.reduce((acc, item) => acc + item.price, 0);
      orderTotal += storeTotal;
      deliveryFeeTotal += store.deliveryFee;
    }
    return { orderTotal, deliveryFeeTotal, grandTotal: orderTotal + deliveryFeeTotal };
  };

  const totals = calculateTotals();

  return (
    <CartContainer>
      {menus.length === 0 ? (
        <div>
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <div>
            <TotalContainer>
              <StyledSpan1>주문금액</StyledSpan1>
              <StyledSpan1>{totals.orderTotal.toLocaleString("ko-KR")}원</StyledSpan1>
            </TotalContainer>
            <TotalContainer>
              <StyledSpan1>배달요금</StyledSpan1>
              <StyledSpan1>{totals.deliveryFeeTotal.toLocaleString("ko-KR")}원</StyledSpan1>
            </TotalContainer>
            <TotalContainer>
              <StyledSpan2>총 결제금액</StyledSpan2>
              <StyledSpan3>{totals.grandTotal.toLocaleString("ko-KR")}원</StyledSpan3>
            </TotalContainer>
          </div>
          <OrderBtn onClick={handleOrder}>{totals.grandTotal.toLocaleString("ko-KR")}원 결제하기</OrderBtn>
        </div>
      ) : (
        <div>
          {store && (
            <StoreContainer>
              <StoreHeader>
                {store.name}
                <span>최소금액 미달</span>
              </StoreHeader>
              {menus.map((menu, index) => (
                <div>
                  <Box />
                  <CartItem key={index}>
                    <ItemInfo>
                      <ItemName>{menu.name}</ItemName>
                      
                      <ItemPrice>{menu.price.toLocaleString("ko-KR")}원</ItemPrice>
                    </ItemInfo>
                    <span>1개 ></span>
                  </CartItem>
                </div>
              ))}
              <AddMoreBtn onClick={() => handleAddMore(store.id)}>더 담기 +</AddMoreBtn>
            </StoreContainer>
          )}
          <div>
            <TotalContainer>
              <StyledSpan1>주문금액</StyledSpan1>
              <StyledSpan1>{totals.orderTotal.toLocaleString("ko-KR")}원</StyledSpan1>
            </TotalContainer>
            <TotalContainer>
              <StyledSpan1>배달요금</StyledSpan1>
              <StyledSpan1>{totals.deliveryFeeTotal.toLocaleString("ko-KR")}원</StyledSpan1>
            </TotalContainer>
            <TotalContainer>
              <StyledSpan2>총 결제금액</StyledSpan2>
              <StyledSpan3>{totals.grandTotal.toLocaleString("ko-KR")}원</StyledSpan3>
            </TotalContainer>
          </div>
          <OrderBtn onClick={handleOrder}>{totals.grandTotal.toLocaleString("ko-KR")}원 결제하기</OrderBtn>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
