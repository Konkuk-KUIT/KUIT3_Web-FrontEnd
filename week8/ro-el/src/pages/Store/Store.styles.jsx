import { styled } from "styled-components";

export const StoreBox = styled.div`
  box-sizing: border-box;
  padding: 44px 0 70px;
`;

export const Header = styled.header`
  width: 100%;
  z-index: 1;
  background: #fff;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px;
`;

export const BackBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  img {
    width: 10px;
    height: 17.5px;
  }
`;

export const StoreInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 26px 24px 14px;
  border-bottom: 1px solid #e5e8eb;

  h1 {
    font-family: "PretendardBold";
    font-size: 26px;
    line-height: 31.03px;
    text-align: left;
    margin: 0;
    color: #191f28;
  }
`;

export const StoreReviewContainerBox = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  gap: 9px;
  margin-bottom: 12px;
`;

export const StoreReviewRateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 18px;
    height: 19px;
  }
  span {
    font-family: "PretendardSemiBold";
    font-size: 17px;
    color: #4e5968;
  }
`;

export const StoreReviewCountBox = styled.div`
  font-family: "PretendardMedium";
  font-size: 16px;
  color: #4e5968;
`;

export const StoreOrderContainerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreOrderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 28px;
  color: #4e5968;
  font-size: 16px;
`;

export const StoreMenuSection = styled.section`
  padding: 0 24px;
`;

export const CategoryH3 = styled.h3`
  font-family: "PretendardSemiBold";
  font-size: 17px;
  color: #6b7684;
  margin: 0;
  padding: 26px 0 11px;
`;

export const StoreMenuList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
