import { styled } from "styled-components";

export const StoreItem = styled.li`
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const StoreInfoContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    font-family: "PretendardSemiBold";
    font-size: 17px;
    line-height: 20px;
  }
  span {
    font-family: "PretendardMedium";
    font-size: 13px;
    line-height: 14px;
    color: #6b7684;
  }
`;

export const StoreReviewBox = styled.div`
  display: flex;

  gap: 2px;

  img {
    width: 13px;
    height: 13px;
  }
`;

export const StoreDeliberyInfoBox = styled.div``;