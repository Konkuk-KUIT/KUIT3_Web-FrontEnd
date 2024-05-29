import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import stores from "../models/stores";
import leftChevron from '../assets/left-chevron.svg';
import yellowStar from '../assets/yellowStar.svg';
import MenuItem from '../components/MenuItem';
import OrderBar from '../components/OrderBar';
import useCartStore from '../store/useCartStore';

const StyledHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 88px;
  background: #FFFFFF;
  justify-content: space-between;
`;

const StyledBack = styled(Link)`
  border: 0px;
  background: transparent;
  margin-top: 54px;
  margin-left: 10px;
  text-decoration: none;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const StyledName = styled.div`
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.03px;
  text-align: left;
  color: #191F28;
  margin-top: 114px;
  margin-bottom: 8px;
`;

const StyledStar = styled.div`
  display: flex;
  align-items: center;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  color: #4E5968;
  gap: 5px;
  margin-bottom: 21px;
`;

const StyledReview = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  text-align: left;
  color: #4E5968;
`;

const StyledDetailsContainer = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  color: #4E5968;
  display: flex;
  flex-direction: column;
`;

const StyledDetail = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 9px;
`;

const StyledLine = styled.div`
  margin-top: 5px;
  border-bottom: 1px solid #E5E8EB;
  width: 100%;
  margin-bottom: 26px;
`;

const StyledSalad = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  color: #6B7684;
  margin-bottom: 11px;
`;

const StoreItem = ({ store }) => (
  <>
    <StyledContainer>
      <StyledName>{store.name}</StyledName>
      <StyledStar>
        <img src={yellowStar} alt="별" />{store.rate}
        <StyledReview>리뷰 {store.reviewCnt.toLocaleString()}</StyledReview>
      </StyledStar>
      <StyledDetailsContainer>
        <StyledDetail>
          <div>결제방법</div>
          <div>토스결제만 현장결제 안됨</div>
        </StyledDetail>
        <StyledDetail>
          <div>최소주문</div>
          <div>{store.minDeliveryPrice.toLocaleString()}원</div>
        </StyledDetail>
        <StyledDetail>
          <div>배달시간</div>
          <div>약 {store.minDeliveryTime}분~{store.maxDeliveryTime}분</div>
        </StyledDetail>
      </StyledDetailsContainer>
    </StyledContainer>
    <StyledLine />
    <StyledContainer>
      <StyledSalad>샐러드</StyledSalad>
      {store.menus && store.menus.map(menu => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </StyledContainer>
  </>
);

const Store = () => {
  const { id } = useParams();
  const store = stores.find(store => store.id === parseInt(id));
  const setStore = useCartStore((state) => state.setStore);

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store, setStore]);

  if (!store) {
    return <div>Store not found</div>;
  }

  return (
    <>
      <StyledHeader>
        <StyledBack to="/store">
          <img src={leftChevron} alt="뒤로 가기"/>
        </StyledBack>
      </StyledHeader>
      <StoreItem key={store.id} store={store} />
      <OrderBar />
    </>
  );
}

export default Store;
