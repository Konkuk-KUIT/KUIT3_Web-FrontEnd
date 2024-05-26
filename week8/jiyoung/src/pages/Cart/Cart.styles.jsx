import styled from "styled-components";

// 회색 구분 div
export const CartDivider = styled.div`
  width: 100%;
  height: 16px;
  background: #f2f4f6;
`;

// 흰색 box
export const CartBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 24px 0 24px;
  background-color: white;
`;

// 흰색 box title
export const CartBoxTitle = styled.div`
  padding-bottom: 12px;
  color: #6b7684;
  font-size: 17px;
  font-weight: 600;
  font-family: "Pretendard", sans-serif;
`;

// 최소금액 미달 text
export const CartMinNotifyTv = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #f04452;
`;

// 최소금액 미달 image
// todo

// 메뉴 수량 text
export const CartMenuAmount = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  color: #4e5968;
`;

// '더 담기' btn
export const CartAddBtn = styled.button`
  width: 100%;
  padding: 20px 0;
  border: none;
  border-top: 1px solid #e5e8eb;
  background-color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #3182f6;
`;

// 금액 box
export const CartFeeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  background-color: white;
`;

// 금액 한 줄 text box
export const CartFeeTvBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 24px;
`;

// 금액 한 줄 text
export const CartFeeTv = styled.div`
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: ${({ weight }) => weight || 500};
  color: ${({ color }) => color};
`;

// 총 결제금액 text box
export const CartTotalFeeTvBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 24px;
`;

// text, btn 담긴 box
export const CartBtnBox = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: column;
`;

// CartBtnBox의 text
export const CartBtnTv = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  color: #6b7684;
  text-align: center;
`;

// CartBtnBox의 btn
export const CartBtn = styled.button`
  margin: 20px;
  height: 56px;
  border: none;
  border-radius: 16px;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
