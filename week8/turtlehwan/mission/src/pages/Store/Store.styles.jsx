import styled from "styled-components";

export const Detail = styled.div`
  padding: 0 0 14px 24px;
  color: #4e5968;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  .rate {
    padding: 6px 0 12px 0;
    color: #4e5968;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .pay,
  .minDeliveryPrice,
  .deliveryTime {
    padding-top: 9px;
  }
`;

export const Menu = styled.div`
  .tag {
    padding: 24px 0 11px 24px;
    color: #6b7684;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  margin-bottom: 111px;
`;

export const ListItem = styled.div`
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .name {
    color: #333d4b;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
  }
  .best {
    color: #3182f6;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-left: 6px;
  }
  .price,
  .ingredients {
    color: #6b7684;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .count {
    color: #6b7684;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ItemGetBtn = styled.div`
  display: inline-flex;
  padding: 8px 14px 8px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3182f6;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  margin: 24px 0 24px 0;
`;
