import React from "react";
import useCartStore from "../store/useCartStore";
import menuImage from "../assets/menuImage.svg";
import styled from 'styled-components'

const StyledName = styled.div`
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: left;
color: #333D4B;
display: flex;
gap: 6px;
`;

const StyledContainer = styled.div`
width: 100%;
height: 110px;
display: flex;
justify-content: space-between;
align-items: center;
&:last-child {
  margin-bottom: 143px;
}
`;

const StyledDetail = styled.div`
  display: flex;
  margin-left: 16px;
  flex-direction: column;
  gap: 5px;

`;

const StyledPrice = styled.div`
font-family: Pretendard;
font-size: 13px;
font-weight: 500;
line-height: 15.51px;
text-align: left;
color: #6B7684;
`;

const StyledImg = styled.div`
width: 54px;
height: 54px;
border-radius: 27px;
`;

const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
`;

const StyledBest = styled.div`
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: left;
color: #3182F6;
`;

const StyledButton = styled.div`
width: 52px;
height: 32px;
border-radius: 8px;
background: #3182F6;
display: flex;
color: #FFFFFF;
font-family: Pretendard;
font-size: 13px;
font-weight: 500;
line-height: 15.51px;
align-items: center;
margin-right: 24px;
justify-content: center;
cursor: pointer;
`;

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <StyledContainer>
    <StyledDiv>
        <StyledImg><img src={menuImage} alt="menu"/></StyledImg>
      <StyledDetail>
      <StyledName>
        {menu.name}
        {menu.isBest && <StyledBest>BEST</StyledBest>}
      </StyledName>
      <StyledPrice>{menu.price.toLocaleString()}원</StyledPrice>
      <StyledPrice>{menu.ingredients}</StyledPrice>
      </StyledDetail>
    </StyledDiv>
      <StyledButton onClick={handleAddMenu} type="button">담기</StyledButton>
    </StyledContainer>
  );
};

export default MenuItem;