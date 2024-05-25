import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { StyledStoreName } from "./Store.styles";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

const Store = () => {
  const { storeId } = useParams(); // useParams로 storeId를 가져옴

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store]);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <StyledStoreName>{store.name}</StyledStoreName>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
