import React from "react";
import { useNavigate } from "react-router-dom";

import GrayStary from "../../assets/star-gray.svg";
import RectangleDefaultImg from "../../assets/rectangle-default-img.svg";

import * as S from "./StoreItem.styles.jsx";

const StoreItem = ({ store }) => {
  const navigate = useNavigate();
  const navigateToStoreDetailPage = (id) => {
    navigate("/store/" + id);
  };

  return (
    <S.StoreItem onClick={() => navigateToStoreDetailPage(store.id)}>
      <img src={RectangleDefaultImg} alt="메뉴 기본 빈 이미지" />
      <S.StoreInfoContentBox>
        <h3>{store.name}</h3>

        <S.StoreReviewBox>
          <img src={GrayStary} alt="별" />
          <span>{store.rate}</span>
          <span>({store.reviewCnt.toLocaleString('ko-KR')})</span>
        </S.StoreReviewBox>

        <S.StoreDeliberyInfoBox>
          <span>
            {store.minDeliveryTime}-{store.maxDeliveryTime}분
          </span>
          <span>∙</span>
          <span>배달비 {store.deliveryFee.toLocaleString('ko-KR')}원</span>
        </S.StoreDeliberyInfoBox>
      </S.StoreInfoContentBox>
    </S.StoreItem>
  );
};

export default StoreItem;
