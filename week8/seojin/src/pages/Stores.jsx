import React from "react";
import OrderBar from "../components/OrderBar/OrderBar";
import storeList from "../models/stores";
import { ReactComponent as Left } from "../assets/leftShevron.svg";
import styles from "../styles/Store_styles.module.css";
import StoreItem from "../components/StoreItem/StoreItem";

const Stores = () => {
  return (
    <div>
      <div>
        <Left />
        <h1 className={styles.header}>샐러드</h1>
      </div>
      <div className={styles.store_list}>
        {storeList.map((store) => {
          return <StoreItem key={store.id} store={store} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Stores;
