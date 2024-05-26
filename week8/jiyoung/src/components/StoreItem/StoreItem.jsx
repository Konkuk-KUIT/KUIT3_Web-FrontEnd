import React from "react";
import {
  StyledMenuBox,
  StyledMenuLeftDiv,
  StyledMenuImg,
  StyledMenuTv,
  StyledMenuName,
  StyledMenuPrice,
  StyledMenuIng,
} from "../MenuItem/MenuItem.styles";

const StoreItem = ({ store }) => {
  return (
    <StyledMenuBox>
      <StyledMenuLeftDiv>
        <StyledMenuImg />
        <StyledMenuTv>
          <StyledMenuName>{store.name}</StyledMenuName>
          <StyledMenuPrice>
            ★ {store.rate} ({store.reviewCnt})
          </StyledMenuPrice>
          <StyledMenuIng>
            {store.minDeliveryTime}분-{store.maxDeliveryTime}분 ・ 배달비{" "}
            {store.deliveryFee}원
          </StyledMenuIng>
        </StyledMenuTv>
      </StyledMenuLeftDiv>
    </StyledMenuBox>
  );
};

export default StoreItem;
