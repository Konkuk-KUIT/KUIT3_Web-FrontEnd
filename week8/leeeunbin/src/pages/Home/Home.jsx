import React from "react";
import './Home.scss';
import Header from "../../components/header/Header.jsx";
import OrderBar from "../../components/OrderBar/OrderBar.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {  useSelector } from "react-redux";

const Home = () => {

  const customerData = useSelector((state) => state.order.address)
  return (
    <>
    <Header />
      <div className="container">
        <div className="TitleContainer">
          <p className="title">오늘은 무엇을 먹을까요?</p>
          <Link to = '/myPage'>
            <button className="info">{customerData}(으)로 배달 {`>`}</button>
          </Link>
        </div>
      </div>
      
      <div className="buttonBody">
        <Link to="/피자">
          <button className="selectButton">
            <img src="/image/pizza.png" alt="Pizza" />
            피자
          </button>
        </Link>

        <Link to="/샐러드">
          <button className="selectButton">
            <img src="/image/salad.png" alt="Salad" />
            샐러드
          </button>
        </Link>

        <Link to="/버거">
          <button className="selectButton">
            <img src="/image/burger.png" alt="Burger" />
            햄버거
          </button>
        </Link>

        <Link to="/한식">
          <button className="selectButton">
            <img src="/image/korean.png" alt="Korean" />
            한식
          </button>
        </Link>

        <Link to="/분식">
          <button className="selectButton">
            <img src="/image/japanese.png" alt="Japanese" />
            분식
          </button>
        </Link>

        <Link to="/치킨">
          <button className="selectButton">
            <img src="/image/chicken.png" alt="Chicken" />
            치킨
          </button>
        </Link>

        <Link to="/스시">
          <button className="selectButton">
            <img src="/image/sushi.png" alt="Sushi" />
            초밥
          </button>
        </Link>

        <Link to="/샌드위치">
          <button className="selectButton">
            <img src="/image/sandwich.png" alt="Sandwich" />
            샌드위치
          </button>
        </Link>

        <Link to="/파스타">
          <button className="selectButton">
            <img src="/image/pasta.png" alt="Pasta" />
            파스타
          </button>
        </Link>

        <Link to="/디저트">
          <button className="selectButton">
          <img src="/image/dessert.png" alt="Dessert" />
            디저트
          </button>
        </Link>

        <Link to="/커피">
          <button className="selectButton">
            <img src="/image/coffee.png" alt="Coffee" />
            커피
          </button>
        </Link>

        <Link to="/more">
          <button className="selectButton">
            <FontAwesomeIcon icon={faEllipsisH} /> 더보기
          </button>
        </Link>
      </div>

      <OrderBar />
    </>
    
  )
};

export default Home;
