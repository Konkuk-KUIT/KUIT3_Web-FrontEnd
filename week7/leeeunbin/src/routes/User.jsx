import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "../db";
import Header from "../components/Header"

const UserContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


const UserName = styled.h2`
  font-size: 24px;
  color: #343a40;
`;

const UserAge = styled.p`
  font-size: 18px;
  color: #495057;
`;

const UserDescription = styled.p`
  font-size: 16px;
  color: #495057;
`;

const UserImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;


const UserContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserInfoText = styled.div`
  margin-left: 20px;
`;

const User = () => {
  const params = useParams();
  const user = data[params.id];

  if (!user) {
    return <div>유저를 찾을 수 없습니다.</div>;
  }

  return (
    <>
    <Header />
    <UserContainer>
      <UserContent>
        <UserImage src={user.image} alt={user.name} />
        <UserInfoText>
          <UserName>{user.name}({user.userId})</UserName>
          <UserAge>{user.age}</UserAge>
        </UserInfoText>
      </UserContent>
      <UserDescription>{user.description}</UserDescription>
    </UserContainer>
    </>
  );
};

export default User;
