import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
`;

const FoodInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FoodName = styled.h3`
  margin-top: 16px;
  margin-bottom: 0px;
  font-size: 17px;
  font-weight: 600;  
`;

const BestTag = styled.span`
  margin-left: 6px;
  color: #3182F6;
  font-size: 17px;
  font-weight: 600;
`;

const Price = styled.span`
  margin-top: 5px;
  margin-bottom: 0px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`
const Ingredients = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`
const OrderBtn = styled.button`
  margin-right: 24px;
  width: 52px;
  height: 32px;
  border-radius: 8px;
  border: 0px;
  color: white;
  background-color: #3182F6;
  font-size: 13px;
`

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <StyledDiv1>
      <FoodInfo>
        <FoodName>
          {menu.name}
          {menu.isBest && <BestTag>BEST</BestTag>}
        </FoodName> 
        <Price>{menu.price.toLocaleString("ko-KR")}원</Price>
        <Ingredients>{menu.ingredients}</Ingredients>
      </FoodInfo>
      <OrderBtn onClick={handleAddMenu} type="button">
        담기
      </OrderBtn>
    </StyledDiv1>
  );
};

export default MenuItem;
