import { styled } from "styled-components";

export const StoreMenuItem = styled.li`
  box-sizing: border-box;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  img {
    width: 54px;
    height: 54px;
  }

  h3,
  p {
    padding: 0;
    margin: 0;
  }

  h3 {
    font-family: "PretendardSemiBold";
    font-size: 17px;
    color: #333d4b;
  }
  span,
  p {
    font-family: "PretendardMedium";
    font-size: 13px;
    color: #6b7684;
  }
`;

export const MenuInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MenuInfoContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  gap: 5px;
`;

export const AddMenuBtn = styled.button`
  width: 52px;
  height: 32px;
  background-color: #3182f6;
  border: none;
  border-radius: 8px;
  font-family: "PretendardMedium";
  font-size: 13px;
  color: #fff;
  flex-shrink: 0;
  flex-grow: 0;
`;