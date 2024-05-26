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

const MenuItem = ({ menu, store }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const setStore = useCartStore((state) => state.setStore);
  const currentStore = useCartStore((state) => state.store);

  const handleAddMenu = () => {
    addMenu(menu);
    if (!currentStore || currentStore.id !== store.id) {
      setStore(store);
    }
    console.log("메뉴:", menu);
    console.log("가게:", store);
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
