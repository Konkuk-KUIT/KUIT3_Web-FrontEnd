import styled from "styled-components";

// MenuItem 전체를 감싸는 <div>
export const StyledMenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  font-family: "Pretendard", sans-serif;
`;

// 메뉴 왼쪽을 감싸는 <div>
export const StyledMenuLeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// 메뉴 사진
export const StyledMenuImg = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  background-color: #ececec;
`;

// 메뉴 text 정보를 감싸는 <div>
export const StyledMenuTv = styled.div`
  width: 200px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

// 메뉴 이름
export const StyledMenuName = styled.h3`
  margin: 0px;
  font-size: 17px;
  font-weight: bold;
  color: #333d4b;
`;

// 메뉴 가격
export const StyledMenuPrice = styled.span`
  font-size: 13px;
  color: #6b7684;
`;

// 메뉴 재료
export const StyledMenuIng = styled.p`
  margin: 0px;
  font-size: 13px;
  color: #6b7684;
`;

// '담기' <button>
export const StyledMenuBtn = styled.button`
  width: 52px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background-color: #3182f6;
  color: white;
  font-size: 13px;
`;
