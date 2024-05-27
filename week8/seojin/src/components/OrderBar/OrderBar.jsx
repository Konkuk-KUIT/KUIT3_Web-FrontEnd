import React from "react";
import useCartStore from "../../store/useCart";
import styles from "./OrderBar.module.css";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
  const navigate = useNavigate();

  const menus = useCartStore((state) => state.menus);

  const handleOrder = () => {
    navigate("/cart");
  };
  const totalPrice = menus.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  const btnIsDisabled = totalPrice === 0 ? true : false;
  return (
    <div className={styles.orderBar}>
      <div className={styles.orderBar_detail}>
        <div className={styles.orderBar_finalPriceText}>총 주문금액</div>
        <div className={styles.orderBar_finalPrice}>
          {totalPrice.toLocaleString("ko-KR")}원
        </div>
      </div>
      <button
        onClick={handleOrder}
        type="button"
        className={styles.orderBar_btn}
        disabled={btnIsDisabled}
        style={{ backgroundColor: btnIsDisabled ? "#D0DFFB" : "#3182F6" }}
      >
        주문하기
      </button>
    </div>
  );
};

export default OrderBar;
