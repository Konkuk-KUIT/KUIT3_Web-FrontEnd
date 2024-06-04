import styled from "styled-components";

export const Info = styled.div`
padding-top: 32px;
padding-bottom: 32px;
display: flex;
justify-content: space-between;
`

export const CartName = styled.h1`
padding-left: 20px;
font-family: Pretendard;
font-size: 17px;
font-weight: 700;
line-height: 20.29px;
text-align: left;
color: #6B7684;
`

export const NotEnough = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
`

export const NotEnoughText = styled.p`
font-family: 'Pretendard';
font-size: 15px;
font-weight: 500;
line-height: 17.9px;
text-align: right;
color: #F04452;
`

export const Alert = styled.img`
width: 13px;
height: 13px;
padding-right: 12px;
`

export const EnoughText = styled.p`
font-family: 'Pretendard';
font-size: 15px;
font-weight: 500;
line-height: 17.9px;
text-align: right;
color: #3182F6;
padding-right: 12px;
`

export const More = styled.button`
display: flex;
justify-content: center;
color: #3182F6;
background-color: #FFFFFF;
width: 100%;
height: 59px;
padding: 19px;
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: center;
border: 1px solid #E5E8EB
`

export const BottomDiv = styled.div`
border-top: 16px solid #F2F4F6;
`

export const CostDiv = styled.div`
display: flex;
justify-content: space-between;
`


export const LText = styled.p`
font-family: Pretendard;
font-size: 17px;
font-weight: 500;
line-height: 20.29px;
text-align: left;
color: #8B95A1;
padding-left: 24px;
`

export const RText = styled.p`
font-family: Pretendard;
font-size: 17px;
font-weight: 500;
line-height: 20.29px;
text-align: right;
color: #505967;
padding-right: 24px;
`
export const TotalL = styled.p`
font-family: Pretendard;
font-size: 17px;
font-weight: 500;
line-height: 20.29px;
text-align: left;
color: #4E5968;
padding-left: 24px;
`

export const TotalR = styled.p`
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: right;
color: #505967;
padding-right: 24px;
`

export const BottomBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const MinPrice = styled.p`
font-family: 'Pretendard';
font-size: 17px;
font-weight: 500;
line-height: 20.29px;
text-align: center;
color: #6B7684;
`

export const DisabledOrder = styled.button`
  border-radius: 16px;
  border: none;
  width: 90%;
  height: 56px;
  margin: 12px;
  background-color: #D0DFFB;
  color: #FFFFFF;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const EnableOrder = styled.button`
  border-radius: 16px;
  border: none;
  width: 90%;
  height: 56px;
  margin: 10px 0px 60px 0px;
  color: #FFFFFF;
  background-color: #3182F6;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;