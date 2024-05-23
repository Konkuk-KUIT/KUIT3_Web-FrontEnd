import React from "react";
import Header from "../../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../data-access/cart/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const storeName = cartItems.length > 0 ? cartItems[0].store : "";

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <Header />
      <div className="orderInfo">
        <div className="storeName">{storeName}</div>
        {cartItems.map((cartItem) => (
          <div className="orderGroup" key={cartItem.id}>
            {/* 각 cartItem의 items 배열의 각 요소를 출력 */}
            {cartItem.items.map((item, index) => (
              <div className="orderMenu" key={index}>
                <span className="menuName">{item.name}</span>
                <span className="menuPrice">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
        <div className="plus">
          {/* 주문 추가 버튼 */}
          {/* <button onClick={() => handleAddToCart({ id: 1, name: "새로운 주문", price: 100 })}>
            주문 추가
          </button> */}
        </div>
        <div className="pay">
          <div className="orderPayDefault">주문금액</div>
          <div className="orderPay">{cartItems.reduce((acc, cur) => acc + cur.items.reduce((total, item) => total + item.price, 0), 0)}원</div>
          <div className="deliveryPay">배달요금</div>
          <div className="totalPay">총 결제금액</div>
        </div>
      </div>
      <div>cart</div>
    </>
  );
};

export default Cart;

