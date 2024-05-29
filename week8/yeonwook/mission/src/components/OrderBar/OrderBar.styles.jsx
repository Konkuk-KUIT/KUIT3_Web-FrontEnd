import styled from "styled-components";

export const OrderBarDiv = styled.div`
    display: flex;
    width: 100%;
    height: 111px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    justify-content: space-between;
    position: fixed;
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px -8px 16px #0000001A
`;

export const CostDiv = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Cost = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
    height: 18px;
    color: #6B7684;
    font-Family: 'Pretendard';
`

export const Price = styled.div`
    font-sixe: 17px;
    font-Family: 'Pretendard';
    color: #4E5968;
`

export const DisabledButton = styled.button`
  display: flex;
  top: 19px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  margin: 19px;
  height: 38px;
  background-color: #D0DFFB;
  color: #FFFFFF;
  justify-content: center;
  align-itmes: center;
  font-family: 'Pretendard';
`;

export const EnableButton = styled.button`
  display: flex;
  top: 19px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  margin: 19px;
  height: 38px;
  color: #FFFFFF;
  background-color: #3182F6;
  justify-content: center;
  align-itmes: center;
  font-family: 'Pretendard';
`;