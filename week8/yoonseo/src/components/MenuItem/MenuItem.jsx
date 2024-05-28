import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";
import ic_menu_circle from "../../assets/ic_menu_circle.svg"

const StyledMenuItem = styled.div`
  width: 100%;
  heigth: 110px;
  display: flex;
  justify-content: space-between;
`;

const StyledDescription = styled.div`
  display: flex;
  font-family: 'Pretendard', sans-serif;
`;

const StyledImg = styled.img`
  width: 54px;
  height: 54px;
  margin-left: 24px;
  margin-top: 28px;
`;

const StyledDetail = styled.div`
  margin-top: 16px;
  margin-left: 16px;
`;

const StyledName = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  display: flex;
`;

const StyledIsBest = styled.div`
  margin-left: 6px;
  color: #3182F6;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
`;

const StyledPrice = styled.div`
  margin-top: 5px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
`;

const StyledIngredients = styled.div`
  margin-top: 5px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
`;

const StyledAddButton = styled.div`
  color: #FFFFFF;
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3182F6;
  width: 52px;
  height: 32px;
  border-radius: 8px;
  margin-top: 40px;
  margin-right: 24px;
`;

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <StyledMenuItem>

      <StyledDescription>
        <StyledImg src={ic_menu_circle} alt="menu_image"></StyledImg>
        <StyledDetail>
          <StyledName>{menu.name}{menu.isBest && <StyledIsBest>BEST</StyledIsBest>}</StyledName>
          <StyledPrice>{menu.price.toLocaleString()}원</StyledPrice>
          <StyledIngredients>{menu.ingredients}</StyledIngredients>
        </StyledDetail>
      </StyledDescription>

      <StyledAddButton onClick={handleAddMenu} type="button">담기</StyledAddButton>
      
    </StyledMenuItem>
  );
};

export default MenuItem;