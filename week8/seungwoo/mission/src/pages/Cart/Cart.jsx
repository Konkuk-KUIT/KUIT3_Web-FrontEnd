import React from "react";
import useCartStore from "../../store/useCartStore";
import { insertComma } from "../../store/insertComma";
import TopBar from "../../components/topBar/topBar";
import styled from "styled-components";

const StyledSection = styled.section`
  position:absolute;
  top:88px;
`;

const StyledFooter = styled.footer`
  position:fixed;
  bottom:0px;
`;

export const Cart = () => {
  const { store, menus } = useCartStore((state) => ({
    store: state.store,
    menus: state.menus,
  }));

  const sumOfPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <>
      <TopBar />
      <StyledSection>
        <div>
          <div>
            <div>{store.name}</div>
            <div>
              {sumOfPrice >= store.minDeliveryPrice ? (
                ""
              ) : (
                <div>
                  <span>최소금액 미달</span>
                  <img src="" alt="!" />
                </div>
              )}
            </div>
          </div>
          {menus.map((menu) => {
            return (
              <>
                <img></img>
                <div>
                  <div>{menu.name}</div>
                  <div>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</div>
                  <div>{insertComma(menu.price)}원</div>
                </div>
                <div>
                  <div>{menu.count}개</div>
                  <button>ㅋ</button>
                </div>
              </>
            );
          })}
          <div>
            더 담기 <img src="" alt="" />
          </div>
        </div>
        <div>
          <div>
            <div>주문금액</div>
            <div>{insertComma(sumOfPrice)}원</div>
          </div>
          <div>
            <div>배달요금</div>
            <div>{insertComma(store.deliveryFee)}원</div>
          </div>
          <div>
            <div>총 결제금액</div>
            <div>{insertComma(sumOfPrice + store.deliveryFee)}원</div>
          </div>
        </div>
      </StyledSection>
      <StyledFooter>
        {sumOfPrice >= store.minDeliveryPrice ? (
          <div>최소 주문금액 충족함</div>
        ) : (
          <div>최소 주문금액 {insertComma(store.minDeliveryPrice)}원</div>
        )}
        <button>
          {insertComma(sumOfPrice + store.deliveryFee)}원 결제하기
        </button>
      </StyledFooter>
    </>
  );
};

export default Cart;
