import { styled } from "styled-components";

export const OrderItem = styled.li`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  span {
    font-family: "PretendardMedium";
    font-size: 15px;
    color: #6b7684;
    display: flex;
    flex-shrink: 0;
  }
`;

export const MenuInfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

export const MenuCountBox = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const MenuImg = styled.img`
  width: 54px;
  height: 54px;
`;

export const RightChevronImg = styled.img`
  width: 7px;
  height: 11.5px;
`;

export const MenuInfoContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h6 {
    font-family: "PretendardBold";
    font-size: 17px;
    color: #333d4b;
  }
  span,
  p {
    font-size: 13px;
    color: #6b7684;
  }
  p {
    white-space: pre-wrap;
  }
`;
