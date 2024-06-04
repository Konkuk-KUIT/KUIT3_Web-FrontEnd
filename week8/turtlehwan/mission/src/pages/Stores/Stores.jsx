import React from "react";
import { Link } from "react-router-dom";
import stores from "../../models/stores";
import * as S from "./Stores.styles";
import SBLImg from "../../asset/statusbar-left-side.svg";
import SBRImg from "../../asset/statusbar-right-side.svg";
import BAImg from "../../asset/icon-arrow-back-ios.svg";
import StoreImg from "../../asset/store-image.svg";
import OrderBar from "../../components/OrderBar/OrderBar";

export const StoreHeader = () => {
  return (
    <S.Top>
      <S.StatusBar>
        <S.StatusBarLeftImg src={SBLImg} />
        <S.StatusBarRightImg src={SBRImg} />
      </S.StatusBar>
      <S.BackArrow>
        <S.BackArrowImg src={BAImg} />
      </S.BackArrow>
    </S.Top>
  );
};

const Stores = () => {
  return (
    <div>
      <StoreHeader />
      <S.Title>샐러드</S.Title>
      {stores.map((store) => (
        <Link to={`/store/${store.id}`} key={store.id}>
          <S.ListStore>
            <img src={StoreImg} />
            <section>
              <p className="id">{store.id}위</p>
              <p className="name">{store.name}</p>
              <p className="rate">
                ⭐{store.rate} (
                {store.reviewCnt
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                )
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
        </Link>
      ))}
      <OrderBar />
    </div>
  );
};

export default Stores;
