import React from "react";
import useCartStore from "../../store/useCartStore";
import CircleDefaultImg from "../../assets/circle-default-img.svg";
import * as S from "./MenuItem.styles.jsx";

const MenuItem = ({ menu, store }) => {
  const previousStore = useCartStore((state) => state.store);
  const addMenu = useCartStore((state) => state.addMenu);
  const setStore = useCartStore((state) => state.setStore);

  const handleAddMenu = () => {
    if (previousStore !== store) {
      if (!previousStore) {
        setStore(store);
      } else if (
        window.confirm(
          "같은 가게의 메뉴만 담을 수 있습니다. 가게를 변경하시겠습니까?"
        )
      ) {
        setStore(store);
      } else {
        return;
      }
    }
    addMenu(menu);
  };

  return (
    <S.StoreMenuItem>
      <S.MenuInfoBox>
        <img src={CircleDefaultImg} alt="메뉴 기본 빈 이미지" />
        <S.MenuInfoContentBox>
          <h3>{menu.name}</h3>
          <span>{menu.price.toLocaleString("ko-KR")}원</span>
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
