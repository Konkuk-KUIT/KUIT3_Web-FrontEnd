import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StyledH1 = styled.h1`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #000;
  font-size : 14px;
  margin-left: 20px;
`;

const Home = () => {
  const bgColor = "white";
  return (
    <>
      <Header />
      <StyledH1 bgColor={bgColor}>
        홈
        <StyledLink to="/detail">
        Watch Profile
        <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: "5px" }} />
        </StyledLink>
      </StyledH1>
      <p>홈페이지 입니다.</p>
    </>
  );
};

export default Home;
