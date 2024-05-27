import React from "react";
import { useNavigate } from "react-router-dom";
import stores from "../../models/stores";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 26px;
  margin-left: 24px;
  margin-bottom: 2px;
  font-size: 26px;
`

const StyledP1 = styled.p`
  color: #6B7684;
  margin: 0px 0;
  margin-top: 4px;
  font-size: 13px;
`

const StoreName = styled.h3`
  font-size: 17px;
  font-family: "Pretendard";
  margin: 0px 0;
  padding: 1px;
`

const Box = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  background-color: #ECECEC;
  margin-right: 10px;
`

const StoreItem = styled.div`
  display: flex;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 8px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Stores = () => {
  const navigate = useNavigate();

  const handleStoreClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  return (
    <div>
      <Title>샐러드</Title>

      <div>
        <div>
          {stores.map((store) => (
            <StoreItem key={store.id} onClick={() => handleStoreClick(store.id)}>
              <Box />
              <ItemInfo>
                <StoreName>{store.id}위</StoreName>
                <StoreName>{store.name}</StoreName>
                <StyledP1>★ {store.rate} ({store.reviewCnt.toLocaleString("ko-KR")})</StyledP1>
                <StyledP1>{store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비 {store.deliveryFee.toLocaleString("ko-KR")}원</StyledP1>
              </ItemInfo>
            </StoreItem>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Stores;
