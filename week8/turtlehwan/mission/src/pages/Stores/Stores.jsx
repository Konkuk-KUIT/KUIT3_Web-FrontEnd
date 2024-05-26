import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import stores from "../../models/stores";
import SBLImg from "../../asset/statusbar-left-side.svg";
import SBRImg from "../../asset/statusbar-right-side.svg";
import BAImg from "../../asset/icon-arrow-back-ios.svg";
import HIImg from "../../asset/home-indicator.svg";

const Top = styled.div`
  height: 88px;
`;
const StatusBar = styled.div`
  //width: 390px;
  height: 47px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 27px 0 27px;
`;
const StatusBarLeftImg = styled.img`
  width: 54px;
  height: 21px;
`;
const StatusBarRightImg = styled.img`
  width: 77.401px;
  height: 13px;
`;

const BackArrow = styled.div`
  height: 41px;
  padding: 7px 0 10px 10px;
`;
const BackArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.div`
  padding: 26px 298px 2px 24px;
  align-items: center;
  color: #191f28;
  font-family: "Pretendard";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ListStore = styled.div``;
const BottomContainer = styled.div`
  height: 111px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  bottom: 0px;
`;
const BottomOrder = styled.div`
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
const BottomOrderText = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const BottomOrderPrice = styled.div`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const BottomOrderBtn = styled.div`
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
const HomeIndicator = styled.div`
  display: flex;
  height: 34px;
  padding: 21px 128px 8px 128px;
  justify-content: center;
  align-items: center;
`;

const Stores = () => {
  return (
    <div>
      <Top>
        <StatusBar>
          <StatusBarLeftImg src={SBLImg} />
          <StatusBarRightImg src={SBRImg} />
        </StatusBar>
        <BackArrow>
          <BackArrowImg src={BAImg} />
        </BackArrow>
      </Top>
      <Title>샐러드</Title>
      <ListStore></ListStore>
      <BottomContainer>
        <BottomOrder>
          <section>
            <BottomOrderText>총 주문금액</BottomOrderText>
            <BottomOrderPrice>원</BottomOrderPrice>
          </section>
          <BottomOrderBtn>주문하기</BottomOrderBtn>
        </BottomOrder>
        <HomeIndicator>
          <img src={HIImg} />
        </HomeIndicator>
      </BottomContainer>
    </div>
  );
};

export default Stores;
