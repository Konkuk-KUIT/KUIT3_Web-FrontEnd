import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import OrderBar from "../../components/OrderBar/OrderBar";

import useCartStore from "../../store/useCartStore";
import stores from "../../models/stores";

const BackButton = styled.button`
background-color:transparent;
border: none;
cursor: pointer;
padding: 10px;
display: flex;
align-items: center;

img {
  width: 24px;
  height: 24px;
}
`

const StoreContainer = styled.div`
  display:flex;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
  align-items:start;
`;

const StoreName = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
  display:flex;
`;

const StoreInfo = styled.span`
  display:flex;
  flex-direction:column;
  align-items:start;
`;

const StoreLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const SquareBlock = styled.span`
  width: 54px;
  height: 54px;
  background-color: rgba(236,236,236,1); 
  margin-right: 20px; 
`;

const FoodCategory = styled.h1`
margin-left:40px;
display: flex;
justify-content: start ;
`;

const FoodCategoryBar=styled.div`
border: 1px solid #ddd;
`

const Stores = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackButton className="backbutton" type="button" onClick={() => navigate(-1)}>
        <img src="/backarrow.svg" alt="SVG Icon"></img>
      </BackButton>
      <FoodCategoryBar>
        <FoodCategory>샐러드</FoodCategory>
      </FoodCategoryBar>
        {stores.map((store) => (
          <StoreLink key={store.id} to={`/store/${store.id}`}>
            <StoreContainer>
              <SquareBlock />
              <StoreInfo>
                <StoreName>
                  {store.name}
                </StoreName>
                <div>
                  <span>⭐{store.rate}</span>
                  <span> ({store.reviewCnt})</span>
                </div>
                <div>
                  <span>{store.minDeliveryTime}분~{store.maxDeliveryTime}분</span>
                  <span>-배달비{store.deliveryFee}</span>
                </div>
              </StoreInfo> 
            </StoreContainer>
          </StoreLink>
        ))}
      <div>
        <OrderBar />
      </div>
    </>
  );
};

export default Stores;
