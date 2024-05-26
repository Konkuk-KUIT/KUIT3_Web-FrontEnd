import React from "react";
import { Link } from "react-router-dom";
import stores from "../../models/stores";
import * as S from "./Stores.styles";
import SBLImg from "../../asset/statusbar-left-side.svg";
import SBRImg from "../../asset/statusbar-right-side.svg";
import BAImg from "../../asset/icon-arrow-back-ios.svg";
import HIImg from "../../asset/home-indicator.svg";
import StoreImg from "../../asset/store-image.svg";

const Stores = () => {
  return (
    <div>
      <S.Top>
        <S.StatusBar>
          <S.StatusBarLeftImg src={SBLImg} />
          <S.StatusBarRightImg src={SBRImg} />
        </S.StatusBar>
        <S.BackArrow>
          <S.BackArrowImg src={BAImg} />
        </S.BackArrow>
      </S.Top>
      <S.Title>샐러드</S.Title>
      {stores.map((store) => (
        <S.ListStore key={store.id}>
          <img src={StoreImg} />
          <section>
            <p className="id">{store.id}위</p>
            <p className="name">{store.name}</p>
            <p className="rate">
              ⭐{store.rate} ({store.reviewCnt})
            </p>
            <p className="detail">
              {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
              {store.deliveryFee
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </p>
          </section>
        </S.ListStore>
      ))}
      <S.BottomContainer>
        <S.BottomOrder>
          <section>
            <S.BottomOrderText>총 주문금액</S.BottomOrderText>
            <S.BottomOrderPrice>원</S.BottomOrderPrice>
          </section>
          <S.BottomOrderBtn>주문하기</S.BottomOrderBtn>
        </S.BottomOrder>
        <S.HomeIndicator>
          <img src={HIImg} />
        </S.HomeIndicator>
      </S.BottomContainer>
    </div>
  );
};

export default Stores;
