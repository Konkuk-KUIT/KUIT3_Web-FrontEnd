import React from "react";
import Header from "../../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addToCart } from "../../data-access/cart/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss"

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const storeInfo = useSelector((state) => state.menu.store);
  const orderpay = cartItems.length > 0 ?
  cartItems.reduce((acc, cur) => acc + cur.items.reduce((total, item) => total + item.price, 0), 0) :
  0;

  const handlePayment = () => {
    alert("기능 구현 중입니다.");
  };

  return (
    <>
      <Header />
      <div className="orderInfo">
        <div className="storeinfo">
          <div className="storeName">{storeInfo.name}</div>
          {orderpay < storeInfo.minDeliveryPrice && (
            <div className="deliveryBoolean">
              최소 주문 금액 미달 <FontAwesomeIcon icon={faExclamationCircle} color="#F04452"/>
            </div>
          )}
        </div>
        
        {cartItems.map((cartItem) => (
          <div className="orderGroup" key={cartItem.id}>
            <div className="menuimg">
              <img src={`http://via.placeholder.com/54x54`} alt="placeholder" />
            </div>

            {cartItem.items.map((item, index) => (
            <div className="orderMenu" key={index}>
              <div>
                <div className="menuName">{item.name}</div>
                <div className="menuPrice">{item.price}</div>
              </div>
            </div>
            ))}

            <button className="detail"> {'>'} </button>
          </div>
        ))}

        <div className="plus">
          <Link to="/">
              <button>
                더 담기 <FontAwesomeIcon icon={faPlus} />
              </button>
          </Link>
        </div>

        <div className="pay">
          <div className="orderPayDefault">주문금액</div>
          <div className="orderPay">{orderpay}원</div>
          <div className="deliveryPayDefault">배달요금</div>
          <div className="deliveryPay">{storeInfo.deliveryFee}원</div>
          <div className="totalPayDefault">총 결제금액</div>
          <div className="totalPay">{orderpay + storeInfo.deliveryFee}원</div>
        </div>
      </div>

      <footer>
        {orderpay < storeInfo.minDeliveryPrice && (
          <div className="minDelivery">
            최소 주문 금액 {storeInfo.minDeliveryPrice}
          </div>
        )}

        <div className="orderButton">
          <button disabled={orderpay < storeInfo.minDeliveryPrice} onClick={handlePayment}>
            {orderpay + storeInfo.deliveryFee}원 결제하기
          </button>
        </div>
      </footer>
    </>
    
  );
};

export default Cart;
