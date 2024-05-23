import React from "react";
import useCartStore from "../../store/useCartStore";
import { styled } from "styled-components";
import MenuDefaultImg from "../../assets/menu-defualt-img.svg";

const StoreMenuItem = styled.li`
  box-sizing: border-box;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  img {
    width: 54px;
    height: 54px;
  }

  h3,
  p {
    padding: 0;
    margin: 0;
  }

  h3 {
    font-family: "PretendardSemiBold";
    font-size: 17px;
    color: #333d4b;
  }
  span,
  p {
    font-family: "PretendardMedium";
    font-size: 13px;
    color: #6b7684;
  }
`;

const MenuInfoBox = styled.div`
  display: flex;
  gap: 16px;
`;

const MenuInfoContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  gap: 5px;
`;

const AddMenuBtn = styled.button`
  width: 52px;
  height: 32px;
  background-color: #3182f6;
  border: none;
  border-radius: 8px;
  font-family: "PretendardMedium";
  font-size: 13px;
  color: #fff;
`;

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <StoreMenuItem>
      <MenuInfoBox>
        <img src={MenuDefaultImg} alt="메뉴 기본 빈 이미지" />
        <MenuInfoContentBox>
          <h3>{menu.name}</h3>
          <span>{menu.price}원</span>
          <p>{menu.ingredients}</p>
        </MenuInfoContentBox>
      </MenuInfoBox>
      <AddMenuBtn onClick={handleAddMenu} type="button">
        담기
      </AddMenuBtn>
    </StoreMenuItem>
  );
};

export default MenuItem;
