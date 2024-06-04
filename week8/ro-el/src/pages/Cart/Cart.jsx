import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./Cart.styles.jsx";
import LeftChevron from "../../assets/left-chevron.svg";
import CircleExclamationMark from "../../assets/circle-exclamation-mark.svg";
import useCartStore from "../../store/useCartStore";
import OrderItem from "../../components/OrderItem/OrderItem.jsx";

const Cart = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const distinctOrderItems = menus.reduce((acc, menu) => {
    const existingMenu = acc.find((item) => item.id === menu.id);

    if (existingMenu) existingMenu.count += 1;
    else acc.push({ ...menu, count: 1 });

    return acc;
  }, []);

  const navigateToPreviousPage = () => {};
  const navigate = useNavigate();
  const navigateToStoreListPage = () => {
    navigate("/store");
  };
  const navigateToStorePage = () => {
    navigate("/store/" + store.id);
  };

  return (
    <S.CartBox>
      <S.Header>
        <S.BackBtn>
          <img
            src={LeftChevron}
            alt="뒤로가기"
            onClick={navigateToPreviousPage}
          />
        </S.BackBtn>
        <S.CancelBtn onClick={navigateToStoreListPage}>주문 취소</S.CancelBtn>
      </S.Header>
      <S.Divider />

      {store ? (
        <>
          <S.OrderItemTitleBox>
            <h3>{store.name}</h3>
            {totalPrice < store.minDeliveryPrice && (
              <div>
                <span>최소 금액 미달</span>
                <img src={CircleExclamationMark} alt="주의 느낌표" />
              </div>
            )}
          </S.OrderItemTitleBox>
          <S.OrderItemList>
            {distinctOrderItems.map((menu) => {
              return <OrderItem key={menu.id} menu={menu} />;
            })}
          </S.OrderItemList>
          <S.AddMoreItemBtn onClick={navigateToStorePage}>
            <span>더 담기 +</span>
          </S.AddMoreItemBtn>
        </>
      ) : (
        <>
          <S.NoMenuInformBox>
            <span>담은 메뉴가 없습니다!</span>
          </S.NoMenuInformBox>
          <S.AddMoreItemBtn onClick={navigateToStoreListPage}>
            <span>메뉴 담기</span>
          </S.AddMoreItemBtn>
        </>
      )}
      <S.Divider />

      <S.PriceInfoBox>
        <S.PriceBox>
          <span>주문 금액</span>
          <span>{totalPrice.toLocaleString('ko-KR')}원</span>
        </S.PriceBox>
        <S.PriceBox>
          <span>배달 요금</span>
          <span>{store ? store.deliveryFee.toLocaleString('ko-KR') : 0}원</span>
        </S.PriceBox>
        <S.TotalPriceBox>
          <span>총 결제 금액</span>
          <span>{store ? (totalPrice + store.deliveryFee).toLocaleString('ko-KR') : totalPrice}원</span>
        </S.TotalPriceBox>
      </S.PriceInfoBox>

      <S.PaymentBox>
        {store && <span>최소 주문 금액 {store.minDeliveryPrice.toLocaleString('ko-KR')}원</span>}
        {store ? (
          totalPrice > store.minDeliveryPrice ? (
            <S.AbledPaymentBtn>
              {(totalPrice + store.deliveryFee).toLocaleString('ko-KR')}원 결제하기
            </S.AbledPaymentBtn>
          ) : (
            <S.DisabledPaymentBtn>
              {(totalPrice + store.deliveryFee).toLocaleString('ko-KR')}원 결제하기
            </S.DisabledPaymentBtn>
          )
        ) : (
          <S.DisabledPaymentBtn>0원 결제하기</S.DisabledPaymentBtn>
        )}
      </S.PaymentBox>
    </S.CartBox>
  );
};

export default Cart;

//toLocaleString(): 숫자를 지역별 포맷으로 변경해 반환