import React from 'react'
import styled from 'styled-components'
import backarrow from "../../assets/backarrow.svg"
import { useNavigate } from 'react-router-dom';

const StyledSection = styled.section`
    position:relative;
    height: 88px;
`;

const  StyledStatusBar = styled.div`
  height:47px;
`;

const BackButton = styled.button`
  position:absolute;
  width: 24px;
  height: 24px;
  top: 54px;
  left: 10px;
  padding: 3px 7.05px 3.53px 7px;
  gap: 0px;
  opacity: 0px;
  background:none;
  border:none;

  &:hover {
    cursor:pointer;
  }
`;

const StyledImg = styled.img`
  position:absolute;
  width: 9.95px;
  height: 17.48px;
  top: 3px;
  left: 7px;
  gap: 0px;
  opacity: 0px;
`;

//무조건 대문자
const TopBar = () => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  
  return (
  <StyledSection>
    <StyledStatusBar></StyledStatusBar>
    <BackButton onClick={goBack}><StyledImg src={backarrow} alt="" /></BackButton>
  </StyledSection>
  );
}

export default TopBar;