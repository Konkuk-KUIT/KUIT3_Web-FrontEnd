import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MenuItem from "../components/MenuItem/Menuitem";
import OrderBar from "../components/OrderBar/OrderBar";
import stores from "../models/stores";
import useCartStore from "../store/useCart";
import styles from "../styles/Store_styles.module.css";
import star from "../assets/Star.png";
import { ReactComponent as Left } from "../assets/leftShevron.svg";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);

  const navigate = useNavigate();

  //렌더링 다 되고 나서 실행시키는 함수
  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store, setStore]);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <div
        className={styles.shvBtn}
        onClick={() => {
          navigate("/store/");
        }}
      >
        <Left />
      </div>
      <h1>{store.name}</h1>

      <div>
        <div className={styles.top_info_first}>
          <img src={star} alt="star"></img>
          <span style={{ fontSize: "17px", fontWeight: "500" }}>
            {store.rate}
          </span>{" "}
          리뷰
          {store.reviewCnt.toLocaleString("ko-KR")}
        </div>
        <div className={styles.top_info}>결제방법 토스결제만 현장결제 안됨</div>
        <div className={styles.top_info}>
          최소주문 {store.minDeliveryPrice.toLocaleString("ko-KR")}원
        </div>
        <div className={styles.top_info_last}>
          배달시간 약{store.minDeliveryTime}-{store.maxDeliveryTime}분
        </div>
      </div>
      <div className={styles.sub_title}>샐러드</div>
      <div>
        {store.menus.map((menu, store) => {
          return <MenuItem key={menu.id} menu={menu} store={store} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
