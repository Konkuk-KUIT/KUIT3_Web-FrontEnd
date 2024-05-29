import React from "react";
import useCartStore from "../../store/useCart";
import styles from "../../styles/Store_styles.module.css";
import thumbnail from "../../assets/thumbnail.png";
const MenuItem = ({ menu, store }) => {
  const previousStore = useCartStore((state) => state.store);
  const addMenu = useCartStore((state) => state.addMenu);
  const setStore = useCartStore((state) => state.setStore);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleAddMenu = () => {
    if (!previousStore || previousStore.id === store.id) {
      if (!previousStore) {
        setStore(store);
      }
      addMenu(menu);
    } else if (previousStore.id !== store.id) {
      if (
        window.confirm("같은 가게의 메뉴만 담을 수 있습니다. 진행하시겠습니까?")
      ) {
        clearCart();
        setStore(store);
        addMenu(menu);
      }
    }
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
