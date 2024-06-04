import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";


const StyledStoreName = styled.div`
    font-family: Pretendard;
    font-size: 26px;
    font-weight: 700;
    line-height: 31.03px;
    text-align: left;

    margin-top: 26px;
    margin-left: 24px; 

    color: #333D4B;
`



const StyledRow = styled.div`
    display: flex;
    width: 390px;
    height: 38px;
    gap: 0px;
    opacity: 0px;

`
const StyledRow1 = styled.div`
display: flex;
width: 390px;
height: 28px;
gap: 0px;
opacity: 0px;


`
const StyledP = styled.div`
width: 18px;
height: 19px;
top: 7px;
left: 23px;
gap: 0px;
opacity: 0px;

margin-left: 23px;
margin-top: 7px;
color: #4E5968;

`

const StyledP1 = styled.div`
font-family: Pretendard;
font-size: 16px;
font-weight: 500;
line-height: 19.09px;
text-align: left;
margin-left: 34px;
margin-top: 7px;
color: #4E5968;

`
const StyledP2 = styled.div`
font-family: Pretendard;
font-size: 15px;
font-weight: 500;
line-height: 17.9px;
text-align: left;

margin-left: 24px;
margin-top: 9px;
color: #4E5968;

`


const StoreInfo = () => {
    const store = useCartStore((state) => state.store);

    if (store == null) {
        return <></>
    }
    
    console.log(store)
    return (
        <div>
            <StyledStoreName>{store.name}</StyledStoreName>
            <StyledRow>
                <StyledP>⭐️{store.rate}</StyledP>
                <StyledP1>리뷰 {store.reviewCnt}</StyledP1>
            </StyledRow>
            <StyledRow1>
                <StyledP2>결제방법</StyledP2>
                <StyledP2>방법토스결제만 현장결제 안됨 </StyledP2>
            </StyledRow1>
            <StyledRow1>
                <StyledP2>최소주문</StyledP2>
                <StyledP2>{store.minDeliveryPrice}원</StyledP2>
            </StyledRow1>            <StyledRow1>
                <StyledP2>배달시간</StyledP2>
                <StyledP2>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</StyledP2>
            </StyledRow1>
            {/* <StyledP>⭐️{store.rate}({store.reviewCnt})</StyledP>

            <StyledP>{store.minDeliveryTime}분~{store.minDeliveryTime}분, 배달비 {store.deliveryFee}원</StyledP> */}

        </div>
    );
  };

  export default StoreInfo;