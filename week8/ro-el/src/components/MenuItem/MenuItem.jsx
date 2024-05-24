import React from "react";
import useCartStore from "../../store/useCartStore";
import CircleDefaultImg from "../../assets/circle-default-img.svg";
import * as S from "./MenuItem.styles.jsx";

const MenuItem = ({ menu, store }) => {
  const previousStore = useCartStore((state) => state.store);
  const addMenu = useCartStore((state) => state.addMenu);
  const setStore = useCartStore((state) => state.setStore);

  const handleAddMenu = () => {
    console.log(previousStore, store);
    if (previousStore !== store) {
      setStore(store);
    }
    addMenu(menu);
  };

  return (
    <S.StoreMenuItem>
      <S.MenuInfoBox>
        <img src={CircleDefaultImg} alt="메뉴 기본 빈 이미지" />
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
