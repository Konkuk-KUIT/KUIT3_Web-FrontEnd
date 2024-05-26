import React from "react";
import Header from "../../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss"
import { addOrder } from "../../data-access/order/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const firstStoreInfo = useSelector((state) => state.menu.store);

  const orderpay = cartItems.length > 0 ?
    cartItems.reduce((acc, cur) => acc + cur.items.reduce((total, item) => total + item.price, 0), 0) :
    0;

  const items = cartItems.reduce((acc, cur) => {
    cur.items.forEach(item => {
      const foundItem = acc.find(accItem => accItem.name === item.name);
      if (foundItem) {
        foundItem.quantity += 1;
        foundItem.totalPrice += item.price;
      } else {
        acc.push({ ...item, quantity: 1, totalPrice: item.price });
      }
    });
    return acc;
  }, []);

  const handlePayment = () => {
    dispatch((dispatch) => {
      const newOrder = {
        orders: cartItems,
        deliveryFee: firstStoreInfo.deliveryFee,
        orderPrice : orderpay,
        totalPrice: orderpay + firstStoreInfo.deliveryFee,
      };

      dispatch(addOrder(newOrder));
    });
  };

  return (
    <>
      <Header />
      <div className="orderInfo">
        <div className="storeinfo">
          <div className="storeName">{firstStoreInfo.name}</div>
          {orderpay < firstStoreInfo.minDeliveryPrice && (
            <div className="deliveryBoolean">
              최소 주문 금액 미달 <FontAwesomeIcon icon={faExclamationCircle} color="#F04452"/>
            </div>
          )}
        </div>
        
        {items.map((item, index) => (
          <div className="orderGroup" key={index}>
            <div className="menuimg">
              <img src={`http://via.placeholder.com/54x54`} alt="placeholder" />
            </div>

            <div className="orderMenu">
              <div>
                <div className="menuName">{item.name}</div>
                <div className="menuPrice">{item.totalPrice}원</div>
              </div>
            </div>

            <div className="menuCount">{item.quantity}개 
              <button className="detail"> {'>'} </button>
            </div>
          
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
          <div className="deliveryPay">{firstStoreInfo.deliveryFee}원</div>
          <div className="totalPayDefault">총 결제금액</div>
          <div className="totalPay">{orderpay + firstStoreInfo.deliveryFee}원</div>
        </div>
      </div>

      <footer>
        {orderpay < firstStoreInfo.minDeliveryPrice && (
          <div className="minDelivery">
            최소 주문 금액 {firstStoreInfo.minDeliveryPrice}원
          </div>
        )}

        <Link to="/order">
          <div className="orderButton">
            <button disabled={orderpay < firstStoreInfo.minDeliveryPrice} onClick={handlePayment}>
              {orderpay + firstStoreInfo.deliveryFee}원 결제하기
            </button>
          </div>
        </Link>

      </footer>
    </>
  );
};

export default Cart;
