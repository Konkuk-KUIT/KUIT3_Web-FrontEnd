import styled from "styled-components";

export const Top = styled.div`
  height: 88px;
`;
export const StatusBar = styled.div`
  //width: 390px;
  height: 47px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 27px 0 27px;
`;
export const StatusBarLeftImg = styled.img`
  width: 54px;
  height: 21px;
`;
export const StatusBarRightImg = styled.img`
  width: 77.401px;
  height: 13px;
`;

export const BackArrow = styled.div`
  height: 41px;
  padding: 7px 0 10px 10px;
`;
export const BackArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.div`
  padding: 26px 0 2px 24px;
  align-items: center;
  color: #191f28;
  font-family: "Pretendard";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ListStore = styled.div`
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;

  section {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .id,
  .name {
    color: #333d4b;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .rate,
  .detail {
    color: #6b7684;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const BottomContainer = styled.div`
  height: 111px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  bottom: 0px;
`;
export const BottomOrder = styled.div`
  display: flex;
  height: 77px;
  padding: 16px 24px;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
export const BottomOrderText = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const BottomOrderPrice = styled.div`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const BottomOrderBtn = styled.div`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3182f6;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
export const HomeIndicator = styled.div`
  display: flex;
  height: 34px;
  padding: 21px 128px 8px 128px;
  justify-content: center;
  align-items: center;
`;
