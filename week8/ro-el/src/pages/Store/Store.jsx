import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);

  useEffect(() => { //나머지가 모두 실행된 이후에 실행
    if (store) {
      setStore(store);
    }
  }, [store]); //빈 배열인 경우, 처음 렌더링 될 때 한 번만 함수가 실행됨 

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <h1>{store.name}</h1>
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
