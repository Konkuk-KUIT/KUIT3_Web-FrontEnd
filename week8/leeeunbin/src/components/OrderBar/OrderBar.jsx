import React from "react";
import "./OrderBar.scss"
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../data-access/order/actions";
import { setMenu, addMenu } from "../../data-access/menu/actions";


const OrderBar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleOrder = () => {
  };

  return (
    <>
      <div className="Footer">
        <div className="Info">
          <div className="default">총 주문금액</div>
          <div className="price">{cartItems.reduce((acc, cur) => acc + cur.items.reduce((total, item) => total + item.price, 0), 0)}원</div>
        </div>

        <button className="orderButton" onClick={handleOrder} type="button">
          주문하기
        </button>
      </div>
    </>
  );
};

export default OrderBar;
