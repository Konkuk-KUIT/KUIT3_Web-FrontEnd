import React from "react";
import useCartStore from "../../store/useCartStore";
import MenuDefaultImg from "../../assets/menu-defualt-img.svg";
import * as S from "./MenuItem.styles.jsx";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <S.StoreMenuItem>
      <S.MenuInfoBox>
        <img src={MenuDefaultImg} alt="메뉴 기본 빈 이미지" />
        <S.MenuInfoContentBox>
          <h3>{menu.name}</h3>
          <span>{menu.price}원</span>
          <p>{menu.ingredients}</p>
        </S.MenuInfoContentBox>
      </S.MenuInfoBox>
      <S.AddMenuBtn onClick={handleAddMenu} type="button">
        담기
      </S.AddMenuBtn>
    </S.StoreMenuItem>
  );
};

export default MenuItem;
