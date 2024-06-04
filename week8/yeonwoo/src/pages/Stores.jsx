import React from 'react';
import { Link } from 'react-router-dom';
import OrderBar from "../components/OrderBar";
import styled from 'styled-components';
import stores from "../models/stores";
import leftChevron from '../assets/left-chevron.svg';
import defaultImage from '../assets/image.svg';
import star from '../assets/star.svg';

const StyledHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 88px;
  background: #FFFFFF;
`;

const StyledButton = styled(Link)`
  border: 0px;
  background: transparent;
  margin-top: 54px;
  margin-left: 10px;
`;

const StyledTitle = styled.div`
  display: flex;
  margin-left: 24px;
  margin-top: 114px;
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.03px;
  text-align: left;
  color: #191F28;
`;

const StyledLink = styled(Link)`
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: left;
color: #333D4B;
text-decoration:none;
`;

const StyledContainer = styled.div`
width: 100%;
height: 94px;
display: flex;
margin-left: 24px;
margin-top: 16px;
`;

const StyledImage = styled.image`
display: flex;
width: 54px;
height: 54px;
top: 16px;
left: 24px;
gap: 0px;
border-radius: 8px 0px 0px 0px;
opacity: 0px;

`;

const StyledInfo = styled.div`
font-family: Pretendard;
font-size: 13px;
font-weight: 500;
line-height: 15.51px;
text-align: left;
color: #6B7684;
`;

const StyledDiv = styled.div`
display: flex;
gap: 4px;
flex-direction: column;
margin-left: 17px;
`;

const StoreItem = ({ store }) => (
  <StyledContainer>
    <StyledImage><img src={defaultImage} /></StyledImage>
    <StyledDiv>
      <StyledLink to={`/store/${store.id}`}>{store.name}</StyledLink>
      <StyledInfo><img src={star} />{store.rate} ({store.reviewCnt.toLocaleString()})</StyledInfo>
      <StyledInfo>{store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비 {store.minDeliveryPrice.toLocaleString()}원</StyledInfo>
    </StyledDiv>
  </StyledContainer>
);

const Stores = () => {
  return (
    <>
      <StyledHeader>
        <StyledButton type="button">
          <img src={leftChevron} alt="뒤로 가기"/>
        </StyledButton>
      </StyledHeader>

      <StyledTitle>샐러드</StyledTitle>
        {stores.map((store) => (
          <StoreItem key={store.id} store={store} />
        ))}
      <OrderBar />
    </>
  );
}

export default Stores;
