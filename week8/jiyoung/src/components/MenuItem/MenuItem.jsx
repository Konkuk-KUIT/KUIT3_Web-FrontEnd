import React from "react";
import useCartStore from "../../store/useCartStore";
import {
  StyledMenuBox,
  StyledMenuLeftDiv,
  StyledMenuImg,
  StyledMenuTv,
  StyledMenuName,
  StyledMenuPrice,
  StyledMenuIng,
  StyledMenuBtn,
} from "./MenuItem.styles";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <StyledMenuBox>
      <StyledMenuLeftDiv>
        <StyledMenuImg />
        <StyledMenuTv>
          <StyledMenuName>{menu.name}</StyledMenuName>
          <StyledMenuPrice>{menu.price}원</StyledMenuPrice>
          <StyledMenuIng>{menu.ingredients}</StyledMenuIng>
        </StyledMenuTv>
      </StyledMenuLeftDiv>

      <StyledMenuBtn onClick={handleAddMenu} type="button">
        담기
      </StyledMenuBtn>
    </StyledMenuBox>
  );
};

export default MenuItem;
