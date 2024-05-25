import React from "react";
import "./OrderBar.scss"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const OrderBar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();


  const orderpay = cartItems.length > 0 ?
    cartItems.reduce((acc, cur) => acc + cur.items.reduce((total, item) => total + item.price, 0), 0) :
    0;

  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="Footer">
        <div className="Info">
          <div className="default">총 주문금액</div>
          <div className="price">{orderpay}원</div>
        </div>

        <button className="orderButton" onClick={handleOrder} type="button">
          주문하기
        </button>
      </div>
    </>
  );
};

export default OrderBar;
