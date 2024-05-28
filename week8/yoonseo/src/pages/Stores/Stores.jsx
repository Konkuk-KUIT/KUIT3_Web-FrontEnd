import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import stores from "../../models/stores";
import ic_arrow_back from "../../assets/ic_arrow_back.svg";
import ic_status_bar_time from "../../assets/ic_status_bar_time.svg";
import ic_status_bar_util from "../../assets/ic_status_bar_util.svg";
import ic_store_rect from "../../assets/ic_store_rect.svg";
import ic_star_gray from "../../assets/ic_star_gray.svg";
import OrderBar from "../../components/OrderBar/OrderBar";

const StyledStatusBar = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
`;

const StyledStatusBarTime = styled.img`
  width: 100%;
  height: 21px;
  margin-top: 19px;
  margin-bottom: 7px;
`;

const StyledStatusBarUtil = styled.img`
  width: 100%;
  height: 13px;
  margin-top: 19px;
  margin-bottom: 19px;
`;

const StyledBackButton = styled.img`
  margin-left: 10px;
  margin-bottom: 10px;
  height: 24px;
`;

const StyledCategory = styled.div`
  margin-left: 24px;
  margin-top: 26px;
  color: #191F28;
  font-family: 'Pretendard', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.03px;
  text-align: left;
`;

const StyledStoreItem = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  cursor: pointer;
`;

const StyledImage = styled.img`
  display: flex;
  width: 54px;
  height: 54px;
  margin-left: 24px;
  margin-right: 17px;
  margin-top: 16px;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  text-decoration: none;
`;

const StyledName = styled.div`
  color: #333D4B;
  font-family: 'Pretendard', sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  margin-top: 2px;
  text-decoration: none;
`;

const StyledDetail = styled.div`
  color: #6B7684;
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
  margin-top: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Stores = () => {
  return (
    <>
      <div>
        <StyledStatusBar>
          <StyledStatusBarTime src={ic_status_bar_time} alt="status_bar_time"></StyledStatusBarTime>
          <StyledStatusBarUtil src={ic_status_bar_util} alt="status_bar_util"></StyledStatusBarUtil>
        </StyledStatusBar>
        <StyledBackButton src={ic_arrow_back} alt="back_button"></StyledBackButton>

        <StyledCategory>샐러드</StyledCategory>
        {stores.map((store) => (
          <StyledLink key={store.id} to={`/store/${store.id}`}><StoreItem store={store} /></StyledLink>
        ))}
      </div>

      <OrderBar />
    </>
  );
};

const StoreItem = ({ store }) => {
  return (
    <StyledStoreItem>

      <StyledImage src={ic_store_rect} alt="store_image"></StyledImage>

      <StyledDescription>
        <StyledName>{store.id}위</StyledName>
        <StyledName>{store.name}</StyledName>
        <StyledDetail>
          <img src={ic_star_gray} alt="star"/> {store.rate} ({store.reviewCnt.toLocaleString()})
        </StyledDetail>
        <StyledDetail>{store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비 {store.deliveryFee.toLocaleString()}원</StyledDetail>
      </StyledDescription>

    </StyledStoreItem>
  );
};

export default Stores;