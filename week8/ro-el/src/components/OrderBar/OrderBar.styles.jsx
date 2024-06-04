import { styled } from "styled-components";

export const OrderBarBox = styled.div`
  box-sizing: border-box;
  padding: 16px 24px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: 0px -8px 16px 0px #0000001a;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: space-between;
`;

export const OrderTotalPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-family: "Pretendard";
    font-size: 15px;
    color: #6B7684;
  }

  div > span {
    font-family: "PretendardSemiBold";
    font-size: 17px;
  }
`;

export const OrderBtn = styled.button`
  width: 84px;
  height: 38px;
  background-color: #3182f6;
  border: none;
  border-radius: 8px;
  font-family: "PretendardMedium";
  font-size: 15px;
  color: #fff;
`;