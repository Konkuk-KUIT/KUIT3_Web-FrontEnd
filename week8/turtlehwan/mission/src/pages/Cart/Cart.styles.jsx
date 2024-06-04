import styled from "styled-components";

export const BorderBar = styled.div`
  height: 16px;
  background: #f2f4f6;
`;

export const WBorderBar = styled.div`
  height: 16px;
  background: #fff;
`;

export const CartInfo = styled.div`
  .storeName {
    padding: 26px 24px 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .storeName > .name {
    color: #6b7684;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .storeName > div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .storeName > div > .warn {
    color: #f04452;
    text-align: right;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Price = styled.div`
  padding: 9px 24px;
  display: flex;
  justify-content: space-between;
  .text {
    color: #8b95a1;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .price {
    color: #505967;
    text-align: right;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const TotalPrice = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;

  .text {
    color: #4e5968;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .price {
    color: #4e5968;
    text-align: right;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  margin-bottom: 129px;
`;

export const OrderPay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  .minOrder {
    color: #6b7684;
    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .orderBtnDisable {
    margin: 19px 20px 0 20px;
    display: inline-flex;
    height: 56px;
    padding: 18px 112px 19px 113px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    background: #d0dffb;

    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .orderBtn {
    margin: 19px 20px 0 20px;
    display: inline-flex;
    height: 56px;
    padding: 18px 112px 19px 113px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    background: #3182f6;

    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
`;

export const MoreAdd = styled.div`
  padding: 20px 0;
  text-align: center;
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
