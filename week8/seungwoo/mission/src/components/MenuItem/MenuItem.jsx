import React from "react";
import styled from "styled-components";

import useCartStore from "../../store/useCartStore";
import { insertComma } from "../../store/insertComma";

const StyledWrap = styled.div`
  position:relative;
  width:auto;
  height:110px;
`;

const StyledImg = styled.img`
  position:absolute;
  width: 54px;
  height: 54px;
  top: 28px;
  left: 24px;
  gap: 0px;
  border-radius: 27px;
  opacity: 0px;
`;

const StyledMenuWrap = styled.div`
  position:absolute;
  top: 16px;
  left: 94px;
  
  gap: 0px;
  opacity: 0px;

  display: flex;
  flex-direction: row;
  
`;

const StyledMenuName = styled.div`

  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  color: #333D4B;

  margin: 0 7px 0 0;
  white-space:nowrap;
`;

const StyledIsBestMenu = styled.div`
  gap: 0px;
  opacity: 0px;
  
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  color: #3182F6;
`;

const StyledPrice = styled.div`
  position:absolute;
  width: 45px;
  height: 16px;
  top: 41px;
  left: 94px;
  gap: 0px;
  opacity: 0px;

  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
  white-space:nowrap;
`;

const StyledIngredients = styled.div`
  position:absolute;
  width: 201px;
  height: 32px;
  top: 62px;
  left: 94px;
  gap: 0px;
  opacity: 0px;

  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left; 
`;

const Styledbutton = styled.button`
  position:absolute;
  width: 52px;
  height: 32px;
  top: 40px;
  left: 314px;
  gap: 0px;
  border-radius: 8px;
  border:none;
  opacity: 0px;
  background-color: #3182F6;    
`;

const StyledAdd = styled.span`
  position:absolute;
  top: 8px;
  left: 15px;
  gap: 0px;
  opacity: 0px;

  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: center;
  color: #FFFFFF;
`;

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <StyledWrap>
      <StyledImg src="http://via.placeholder.com/54x54" alt="" />
      <StyledMenuWrap><StyledMenuName>{menu.name}</StyledMenuName><StyledIsBestMenu>{menu.isBest ? "BEST" : ""}</StyledIsBestMenu></StyledMenuWrap>
      <StyledPrice>{insertComma(menu.price)}원</StyledPrice>
      <StyledIngredients>{menu.ingredients}</StyledIngredients>
      <Styledbutton onClick={handleAddMenu} type="button">
        <StyledAdd>담기</StyledAdd>
      </Styledbutton>
    </StyledWrap>
  );
};

export default MenuItem;
