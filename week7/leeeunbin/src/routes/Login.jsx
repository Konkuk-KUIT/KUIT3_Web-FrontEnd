import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("로그인 기능 구현 중입니다.");
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <h2>로그인</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="아이디" />
          <Input type="text" placeholder="이름" />
          <Button type="submit">로그인</Button>
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
  }
`;

export default Login;
