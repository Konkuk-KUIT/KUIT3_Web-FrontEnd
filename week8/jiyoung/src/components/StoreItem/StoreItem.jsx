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
import { useNavigate } from "react-router-dom";

const StoreItem = ({ store }) => {
  const navigate = useNavigate();
  const handleStore = () => {
    navigate(`/store/${store.id}`);
  };

  return (
    <StyledMenuBox onClick={handleStore}>
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
