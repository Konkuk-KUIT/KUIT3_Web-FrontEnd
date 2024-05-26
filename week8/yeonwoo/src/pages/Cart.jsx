import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useCartStore from "../store/useCartStore";
import leftChevron from "../assets/left-chevron.svg";
import CircleExclamationMark from "../assets/circle-exclamation-mark.svg";
import plus from "../assets/plus.svg";

const StyledHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 88px;
  background: #FFFFFF;
  justify-content: space-between;
`;

const StyledBack = styled(Link)`
  border: 0px;
  background: transparent;
  margin-top: 54px;
  margin-left: 10px;
  text-decoration: none;
`;

const CartBox = styled.div`
  margin-top: 88px;
`;

const BackBtn = styled.button`
  border: none;
  background: none;
`;

const CancelBtn = styled.button`
  border: none;
  background: none;
  margin-top: 56px;
  margin-right: 15px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  text-align: left;
  color: #333D4B;
`;

const Divider = styled.hr`
  width: 100%;
  height: 16px;
  background: #F2F4F6;
  border: none;
`;

const OrderItemTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const OrderItemList = styled.div`
  margin-bottom: 16px;
`;

const AddMoreItemBtn = styled.button`
  width: 100%;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  color: #3182F6;
  background: #FFFFFF;
  cursor: pointer;
  text-align: center;
  border: none;
  width: 100%;
  height: 59px;
  padding: 19px 0px 20px 0px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
`;

const NoMenuInformBox = styled.div`
  text-align: center;
  padding: 32px;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  color: #6B7684;
  border-bottom: 1px solid #E5E8EB;
`;

const PriceInfoBox = styled.div`
  margin: 16px 0;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TotalPriceBox = styled(PriceBox)`
  font-weight: bold;
`;

const PaymentBox = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 34px;
  left: 20px;
  right: 20px;
`;

const AbledPaymentBtn = styled.button`
  width: 100%;
  padding: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const DisabledPaymentBtn = styled(AbledPaymentBtn)`
  background: #D0DFFB;
  cursor: not-allowed;
  height: 56px;
  border-radius: 16px;
`;

const StyledMoney = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
`;

const StyledMin = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.29px;
  text-align: center;
  color: #6B7684;
`;

const Cart = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const clearCart = useCartStore((state) => state.clearCart);

  const distinctOrderItems = menus.reduce((acc, menu) => {
    const existingMenu = acc.find((item) => item.id === menu.id);

    if (existingMenu) existingMenu.count += 1;
    else acc.push({ ...menu, count: 1 });

    return acc;
  }, []);

  const navigate = useNavigate();
  const navigateToPreviousPage = () => {
    navigate(-1); // Navigate to previous page
  };
  const navigateToStoreListPage = () => {
    navigate("/store");
  };
  const navigateToStorePage = () => {
    if (store) {
      navigate("/store/" + store.id);
    }
  };

  if (!store || menus.length === 0) {
    return (
      <>
        <CartBox>
          <StyledHeader>
            <StyledBack to="/store">
              <img src={leftChevron} alt="뒤로 가기" />
            </StyledBack>
            <CancelBtn onClick={() => clearCart()}>주문 취소</CancelBtn>
          </StyledHeader>
        </CartBox>
        <Divider />
        <NoMenuInformBox>
          <span>담은 메뉴가 없습니다!</span>
        </NoMenuInformBox>
        <AddMoreItemBtn onClick={navigateToStoreListPage}>
          더 담기 <img src={plus} alt="플러스" />
        </AddMoreItemBtn>
        <Divider />
          <PaymentBox>
            <DisabledPaymentBtn>0원 결제하기</DisabledPaymentBtn>
          </PaymentBox>
      </>
    );
  }

  return (
    <CartBox>
      <StyledHeader>
        <StyledBack to="/store">
          <img src={leftChevron} alt="뒤로 가기" />
        </StyledBack>
        <CancelBtn onClick={() => clearCart()}>주문 취소</CancelBtn>
      </StyledHeader>
      <Divider />

      <OrderItemTitleBox>
        <h3>{store.name}</h3>
        {totalPrice < store.minDeliveryPrice && (
          <div>
            <span>최소 금액 미달</span>
            <img src={CircleExclamationMark} alt="주의 느낌표" />
          </div>
        )}
      </OrderItemTitleBox>
      <OrderItemList>
        {distinctOrderItems.map((menu) => (
          <div key={menu.id}>
            <span>{menu.name}</span>
            <span>{menu.price.toLocaleString()}원</span>
            <span>{menu.count}개</span>
          </div>
        ))}
      </OrderItemList>
      <AddMoreItemBtn onClick={navigateToStorePage}>
        <span>더 담기 +</span>
      </AddMoreItemBtn>
      <Divider />

      <PriceInfoBox>
        <PriceBox>
          <span>주문 금액</span>
          <StyledMoney>{totalPrice.toLocaleString()}원</StyledMoney>
        </PriceBox>
        <PriceBox>
          <span>배달 요금</span>
          <StyledMoney>{store ? store.deliveryFee.toLocaleString() : 0}원</StyledMoney>
        </PriceBox>
        <TotalPriceBox>
          <span>총 결제 금액</span>
          <StyledMoney>{store ? (totalPrice + store.deliveryFee).toLocaleString() : totalPrice.toLocaleString()}원</StyledMoney>
        </TotalPriceBox>
      </PriceInfoBox>

      <PaymentBox>
        {store && <StyledMin>최소 주문 금액 {store.minDeliveryPrice.toLocaleString()}원</StyledMin>}
        {store ? (
          totalPrice >= store.minDeliveryPrice ? (
            <AbledPaymentBtn>
              {(totalPrice + store.deliveryFee).toLocaleString()}원 결제하기
            </AbledPaymentBtn>
          ) : (
            <DisabledPaymentBtn>
              {(totalPrice + store.deliveryFee).toLocaleString()}원 결제하기
            </DisabledPaymentBtn>
          )
        ) : (
          <DisabledPaymentBtn>0원 결제하기</DisabledPaymentBtn>
        )}
      </PaymentBox>
    </CartBox>
  );
};

export default Cart;
