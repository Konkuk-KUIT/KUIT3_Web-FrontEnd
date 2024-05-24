import React from "react";
import { Link } from "react-router-dom";
import stores from "../../models/stores";
import { insertComma } from "../../store/insertComma";
import OrderBar from "../../components/OrderBar/OrderBar";
import styled from "styled-components";
import starSVG from "../../assets/grayStar.svg"

const StyledSection = styled.section`

`;
const StyledHeader = styled.header`
`;

const StyledStoreRank = styled.div`
  position:absolute;
  top: 16px;
  left: 95px;

  font-weight:600;
  font-size:17px;
  line-height:20.29px;
  color: #333D4B;
`;

const StyledStoreName = styled.div`
  position:absolute;
  top: 38px;
  left:95px;

  font-weight:600;
  font-size:17px;
  line-height:20.29px;
  color: #333D4B;
`;

const StyledStarImg = styled.img`
  position:absolute;
  top:64.41px;
  left:92.84px;
`;

const StyledReviewInfo = styled.span`
  position:absolute;
  top:63px;
  left:107px;

  font-size: 13px;
  line-height:15.51px;
  color: #6B7684
`;

const StyledDeliveryInfo = styled.div`
  position:absolute;
  top:83px;
  left:94px;

  font-size: 13px;
  line-height:15.51px;
  color: #6B7684
`;

const StyledImg = styled.img`
  position:absolute;
  top: 16px;
  left: 24px;
  border-radius: 8px;
  width: 54px;
  height: 54px;
`;

const StyledLink = styled(Link)`
    position:relative;
    text-decoration:none;
    display:flex;
    flex-direction:row;
    height:116px;
`;



const Stores = () => {
  return (
    <StyledSection>
      <div>
        {stores.map((store) => (
          <>
            <StyledLink to={`./${store.id}`}>
              <StyledImg src="http://via.placeholder.com/54x54" alt="" />
              <div>
                <StyledStoreRank>{store.id}위</StyledStoreRank>
                <StyledStoreName>{store.name}</StyledStoreName>
                
                  <StyledStarImg src={starSVG} alt="★" />
                  <StyledReviewInfo>
                    {store.rate} ({insertComma(store.reviewCnt)})
                  </StyledReviewInfo>
                <StyledDeliveryInfo>
                  {store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비{" "}
                  {insertComma(store.deliveryFee)}원
                </StyledDeliveryInfo>
              </div>
            </StyledLink>
          </>
        ))}
      </div>
      <OrderBar></OrderBar>
    </StyledSection>
  );
};

export default Stores;
