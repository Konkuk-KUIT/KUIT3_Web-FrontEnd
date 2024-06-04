import React from "react";
import styles from "../styles/Cart_styles.module.css";
import { ReactComponent as Left } from "../assets/leftShevron.svg";
import OrderItem from "../components/OrderItem/OrderItem";
import useCartStore from "../store/useCart";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Alert } from "../assets/alert.svg";

const Cart = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();
  const orderPrice = menus.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  const deliveryFee = store?.deliveryFee ?? 0;
  const totalPrice = orderPrice + deliveryFee;
  const leastPrice = 13000;
  const isDisabled = totalPrice >= leastPrice ? false : true;
  const handleCancelOrder = () => {
    clearCart();
    navigate("/store");
  };
  return (
    <div>
      <div className={styles.header}>
        <Left
          className={styles.backBtn}
          onClick={() => {
            navigate(-1);
          }}
        />
        <span className={styles.backBtn} onClick={handleCancelOrder}>
          주문취소
        </span>
      </div>
      {store ? (
        <div className={styles.items}>
          <div className={styles.header_co}>
            <h4 style={{ color: "grey", marginLeft: "24px" }}>{store.name}</h4>
            <div>
              {isDisabled === true ? (
                <span style={{ color: "#F04452" }}>
                  최소금액 미달 <Alert />
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>

          {menus.map((menu) => {
            return <OrderItem key={menu.id} menu={menu} />;
          })}
        </div>
      ) : (
        <></>
      )}
      <div
        className={styles.addMore}
        onClick={() => {
          navigate("/store/" + store?.id);
        }}
      >
        더 담기
        <Plus />
      </div>

      <div className={styles.price}>
        <div className={styles.preTotal}>
          <div>주문금액</div>
          {orderPrice.toLocaleString("ko-KR")}원
        </div>
        <div className={styles.preTotal}>
          <div>배달요금</div>
          {deliveryFee.toLocaleString("ko-KR")}원
        </div>
        <div className={styles.priceTotal}>
          <div>총 결제금액</div>
          {totalPrice.toLocaleString("ko-KR")}원
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.leastPrice}>
          최소 주문금액 {leastPrice.toLocaleString("ko-KR")}원
        </div>
        <button
          disabled={isDisabled}
          style={{ backgroundColor: isDisabled ? "#D0DFFB" : "#3182F6" }}
          className={styles.finalBtn}
        >
          {totalPrice.toLocaleString("ko-KR")}원 결제하기
        </button>
      </div>
    </div>
  );
};

export default Cart;
