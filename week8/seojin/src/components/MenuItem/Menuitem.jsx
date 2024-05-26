import React, { useEffect } from "react";
import useCartStore from "../../store/useCart";
import styles from "../../styles/Store_styles.module.css";
import thumbnail from "../../assets/thumbnail.png";
const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  // const currentStore = useCartStore((state) => state.store); //현재 장바구니 가게

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <div className={styles.menu_item}>
      <img className={styles.thumbnail} src={thumbnail} alt="profile"></img>
      <div>
        <h3 className={styles.menu_name}>{menu.name}</h3>
        <span className={styles.menu_details}>
          {menu.price.toLocaleString("ko-KR")}원
        </span>
        <p className={styles.menu_details}>{menu.ingredients}</p>
      </div>

      <button onClick={handleAddMenu} type="button" className={styles.button}>
        담기
      </button>
    </div>
  );
};

export default MenuItem;
