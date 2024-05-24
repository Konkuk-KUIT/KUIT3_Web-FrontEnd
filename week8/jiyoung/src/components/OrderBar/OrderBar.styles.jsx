import styled from "styled-components";

// OrderBar 전체를 감싸는 <div>
export const StyledOrderBox = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-radius: 16px 16px 0 0;
  background-color: white;
  box-shadow: 0px -8px 16px 0px #0000001a;
  font-family: "Pretendard", sans-serif;
`;

// '총 주문금액', '{}원'을 감싸는 <div>
export const StyledOrderLeftDiv = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

// '총 주문금액' <div>
export const StyledOrderLeftDiv1 = styled.div`
  color: #6b7684;
  font-size: 15px;
`;

// '{}원' <div>
export const StyledOrderLeftDiv2 = styled.div`
  color: #4e5968;
  font-size: 17px;
  font-weight: bold;
`;

// '주문하기' <button>
export const StyledOrderBtn = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #3182f6;
  color: white;
  font-size: 15px;
`;
