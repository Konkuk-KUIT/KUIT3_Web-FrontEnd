import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";

const StyledHeader = styled.div`
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: left;

margin-left: 17px;
margin-top: 16px;
`
const StyledP = styled.div`
margin-left: 17px;
margin-top: 5px;
font-family: Pretendard;
font-size: 13px;
font-weight: 500;
line-height: 15.51px;
text-align: left;
color: #6B7684;
`

const StyledStoreName = styled.div`
margin-left: 17px;
margin-top: 5px;
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: left;


color: #333D4B;

`


  const StoreList = ({ store }) => {
  
    return (
        <div>
            {store.id < 4 && (<StyledHeader>{store.id}위</StyledHeader>)}
            <StyledStoreName>{store.name}</StyledStoreName>
            <StyledP>⭐️{store.rate}({store.reviewCnt})</StyledP>
            <StyledP>{store.minDeliveryTime}분~{store.minDeliveryTime}분, 배달비 {store.deliveryFee}원</StyledP>
        </div>
    );
  };

  export default StoreList;
  