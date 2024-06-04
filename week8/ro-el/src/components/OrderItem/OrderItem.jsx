import React from "react";

import * as S from "./OrderItem.styles.jsx";
import RectangleDefaultImg from "../../assets/rectangle-default-img.svg";
import RightChevron from "../../assets/right-chevron.svg";

const OrderItem = ({ menu }) => {
  return (
    <S.OrderItem>
      <S.MenuInfoBox>
        <S.MenuImg src={RectangleDefaultImg} alt="메뉴 기본 빈 이미지" />
        <S.MenuInfoContentBox>
          <h6>{menu.name}</h6>
          <p>{menu.ingredients}</p>
          <span>{menu.price.toLocaleString('ko-KR')}원</span>
        </S.MenuInfoContentBox>
      </S.MenuInfoBox>
      <S.MenuCountBox>
        <span>{menu.count}개</span>
        <S.RightChevronImg src={RightChevron} alt="right chevron" />
      </S.MenuCountBox>
    </S.OrderItem>
  );
};
//<p>{menu.ingredients}</p> -> 추가한 옵션으로 수정해야 함

export default OrderItem;
