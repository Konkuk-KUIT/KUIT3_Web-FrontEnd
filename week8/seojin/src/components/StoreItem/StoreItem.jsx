import React from "react";
import styles from "../../styles/Stores_styles.module.css";
import profile from "../../assets/Frame.png";
import star from "../../assets/greyStar.png";
import { useNavigate } from "react-router-dom";
const StoreItem = ({ store }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.store}
      onClick={(id) => {
        navigate("/store/" + store.id);
      }}
    >
      <img src={profile} width="54px" height="54px" alt="profile"></img>
      <div className={styles.store_item}>
        <span className={styles.store_item_title}>{store.id}위</span>
        <span className={styles.store_item_title}>{store.name}</span>

        <div className={styles.review}>
          <img src={star} alt="review" />
          {store.rate} ({store.reviewCnt})
        </div>

        <div className={styles.delivery}>
          <span>
            {store.minDeliveryTime}분~{store.maxDeliveryTime}분
          </span>

          <span>∙</span>

          <span>배달비 {store.deliveryFee.toLocaleString("ko-KR")}원</span>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
