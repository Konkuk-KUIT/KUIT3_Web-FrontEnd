import React from "react";
import { StoreInfo, StoreName } from "../Store/Store.styles";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItem from "../../components/StoreItem/StoreItem";
import stores from "../../models/stores";

const Stores = () => {

  return (
    <div>
      <StoreInfo>
        <StoreName>샐러드</StoreName>
      </StoreInfo>

      <div>
        {stores.map((store) => {
          return <StoreItem key={store.id} store={store}/>;
        })}
      </div>

      <OrderBar />
    </div>
  );
};

export default Stores;
