import React from "react";
import profile from "../../assets/Frame.png";
import styles from "../../styles/OrderItem_styles.module.css";
import rightShv from "../../assets/Vector.png";

const OrderItem = ({ menu }) => {
  return (
    <div className={styles.menu}>
      <img src={profile} alt="profile" width="54px" height="54px"></img>

      <div className={styles.menuItem}>
        <span className={styles.menuName}>{menu.name}</span>
        <span className={styles.menuDetail}>{menu.ingredients}</span>
        <span className={styles.menuDetail}>
          {menu.price.toLocaleString("ko-KR")}원
        </span>
      </div>

      <span>
        {menu.quantity}개
        <img className={styles.menuDetailBtn} src={rightShv} alt="see detail" />
      </span>
    </div>
  );
};

export default OrderItem;
