import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateToRider, updateToOwner, updateToPaymentMethod } from "../../data-access/order/actions";
import Header from "../../components/header/Header";

import "./Order.scss"

const Order = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  const [toRider, setToRider] = useState(order.toRider);
  const [toOwner, setToOwner] = useState(order.toOwner);

  const handleToRiderChange = (e) =>{
    const { value } = e.target;

    setToRider(value);
  }

  const handleToOwnerChange = (e) => {
    const { value } = e.target;

    setToOwner(value);
  }

  const handleUpdateToRider = () => {
    dispatch(updateToRider(toRider));
  }

  const handleUpdateToOwner = () => {
    dispatch(updateToOwner(toOwner));
  }

  const handleUpdateToPaymentMethod = (e) => {
    const value = e.target.id;
    dispatch(updateToPaymentMethod(value));
  }

  const handlePay = () => {
    
    if(!order.paymentMethod) {
      alert('결제수단을 선택해주세요.')
    } else {
      const confirmPay = window.confirm(
        `주문 정보가 맞는지 확인해주세요.
        주소 : ${order.address}
        총금액 : ${order.totalPrice}
        주문 수단 : ${order.paymentMethod}`
      );
  
      if(confirmPay) {
        alert ('결제 링크로 연결합니다.')
      }
    }
  }

  return (
    <>
    <Header />
      <div className="deliveryInfo">
        <div className="AddressInfo">
          <div className="AddressDefault">배달주소</div>
          <div className="Address">{order.address}</div>
        </div>

        <div className="riderInfo">
          <div className="toRiderDefault">라이더님께</div>
          <div className="ToRider">
            <input 
              type="text"
              value={toRider}
              placeholder="요청사항 없음"
              onChange={handleToRiderChange} />
              <button onClick={handleUpdateToRider}>입력</button>
          </div>
        </div>
      </div>

        <div className="customerInfo">
          <div className="phoneNumDefault">내 연락처</div>
          <div className="phoneNum">{order.phoneNum}</div>
        </div>

        <div className="ownerInfo">
          <div className="ToOwnerDefault">가게 사장님께</div>
          <div className="ToOwner">
            <input 
              type="text"
              value={toOwner}
              placeholder="요청사항 없음"
              onChange={handleToOwnerChange} />
              <button onClick={handleUpdateToOwner}>입력</button>
          </div>
        </div>

        <div className="methodInfo">
          <div className="methodDefault">결제 수단</div>

          <div className="methodForm">
            <label>
              <input type="radio" name="method" id="네이버페이" onClick={handleUpdateToPaymentMethod} />
              네이버페이
            </label>

            <label>
              <input type="radio" name="method" id="신용/체크카드" onClick={handleUpdateToPaymentMethod} />
              신용/체크카드
            </label>

            <label>
              <input type="radio" name="method" id="토스페이" onClick={handleUpdateToPaymentMethod} />
              토스페이
            </label>

            <label>
              <input type="radio" name="method" id="기타 결제수단" onClick={handleUpdateToPaymentMethod} />
              기타 결제수단
            </label>
          </div>
        </div>

        <div className="paymentInfo">
          <div className="totalPriceDefault">결제 금액</div>
          <div className="totalPrice">{order.totalPrice}원</div>
          <div className="orderPriceDefault">주문 금액</div>
          <div className="orderPrice">{order.orderPrice}원</div>
          <div className="deliveryFeeDefault">배달팁</div>
          <div className="deliveryFee">{order.deliveryFee}원</div>
        </div>

        <footer>
          <button className="payButton" onClick={handlePay}>{order.totalPrice}원 결제하기</button>
        </footer>
    </>
  )
}

export default Order;