import { styled } from "styled-components";

export const StoresBox = styled.div`
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

export const CategoryTitle = styled.h1`
  padding: 26px 24px 2px;
  color: #191f28;
  font-family: "PretendardBold";
  font-size: 26px;
  line-height: 31.03px;
  text-align: left;
  margin: 0;
`;

export const StoreList = styled.ul`
  padding: 0 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
