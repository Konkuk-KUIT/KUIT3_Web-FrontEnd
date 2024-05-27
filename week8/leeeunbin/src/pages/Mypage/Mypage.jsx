import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAddress, updatePhonenum } from "../../data-access/order/actions";
import { updateName, updatePassword, updateEmail } from "../../data-access/user/actions";
import Header from "../../components/header/Header";

import "./Mypage.scss";

const Mypage = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  const handleUpdateAddress = () => {
    const value = window.prompt("주소를 입력하세요:", order.address);
    console.log(value);
    if(value !== null) {
      dispatch(updateAddress(value));
    }
  }

  const handleUpdatePhoneNum = () => {
    const value = window.prompt("전화번호를 입력하세요:", order.phoneNum);
    if(value !== null) {
      dispatch(updatePhonenum(value));
    }
  }

  const handleUpdateName = () => {
    const value = window.prompt("이름를 입력하세요:", user.name);
    if(value !== null) {
      dispatch(updateName(value));
    }
  }
  const handleUpdateEmail = () => {
    const value = window.prompt("이메일을 입력하세요:", user.email);
    if(value !== null) {
      dispatch(updateEmail(value));
    }
  }

  const handleUpdatePassword = () => {
    const value = window.prompt("새로운 비밀번호를 입력하세요:");
    if(value !== null) {
      dispatch(updatePassword(value));
    }
  }
  return (
    <>
    <Header />
    <div className="userImg">
      <img src={`http://via.placeholder.com/105x105`} alt="placeholder" />
    </div>

    <div className="userInfo">
      <button className="defaultInfo" onClick={handleUpdateName}>
        <div className="nameDefault">이름</div>
        <div className="name">{user.name}{`>`}</div>
      </button>

      <button className="defaultInfo" onClick={handleUpdateEmail}>
        <div className="emailDefault">이메일</div>
        <div className="email">{user.email}{`>`}</div>
      </button>

      <button className="defaultInfo" onClick={handleUpdateAddress}>
        <div className="addressDefault">주소</div>
        <div className="address">{order.address}{`>`}</div>
      </button>

      <button className="defaultInfo" onClick={handleUpdatePhoneNum}>
        <div className="phoneDefault"> 전화번호 </div>
        <div className="phone">{order.phoneNum} {`>`}</div>
      </button>

      <button className="defaultInfo" onClick={handleUpdatePassword}>
        <div className="passwordDefault">비밀번호 변경</div>
        <div className="passowrd">{`>`}</div>
      </button>
    </div>

    <footer>
      로그아웃 | 회원탈퇴
    </footer>
    </>
  )
}

export default Mypage;