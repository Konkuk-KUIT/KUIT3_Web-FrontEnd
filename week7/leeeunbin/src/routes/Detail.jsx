import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { data } from "../db";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  cursor: pointer;

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 500;
`;

const IconContainer = styled.div`
  margin-bottom: 10px;
`;

const Detail = () => {
  return (
    <>
      <Header />
      <Container>
        <CardGrid>
          {data.map((item, index) => (
            <Card key={index}>
              <StyledLink to={`/detail/${index}`}>
                <IconContainer>
                  <FontAwesomeIcon icon={faUser} size="3x" />
                </IconContainer>
                <h2>{item.name}</h2>
              </StyledLink>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </>
  );
};

export default Detail;
