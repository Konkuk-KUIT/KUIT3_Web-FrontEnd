import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo/StoreInfo";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";


const StyledStoreInfo = styled.div`
  width: 390px;
  height: 194px;
  top: 88px;
  gap: 0px;
  opacity: 0px;

`;

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);
  const pubStoreId = useCartStore((state) => state.storeId);

  const setStore = useCartStore((state) => state.setStore);
  const setStoreId = useCartStore((state) => state.setStoreId);


  useEffect(() => {

    setStore(store);


  }, [store]);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }
  setStore(store);
  return (
    <div>
      <StyledStoreInfo>
        <StoreInfo store={store}/>
      </StyledStoreInfo>
      {/* <h1>{store.name}</h1> */}
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
