import React, { useState } from 'react'
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const Login = () => {
  return (
    <>
    <Header />
    <div>Login</div>
    {/* <form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button formAction="">
            Login
        </button>
    </form> */}
    </>
  )
}

export default Login;