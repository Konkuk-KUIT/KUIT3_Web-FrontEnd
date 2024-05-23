import React from "react";
import { Link } from "react-router-dom";
import "./StoreItem.scss";
import stores from "../../models/stores";

const StoreItem = ({ categoryId }) => {
  return (
    <>
      {stores.map((store, index) => (
        <Link to={`/store/${categoryId}/${store.id}`} key={store.id}>
          <div className="StoreInfo">
            <div className="storeImg">
              <img src={`http://via.placeholder.com/54x54`} alt="placeholder" />
            </div>
            <div className="Info">
              <div className="ranking">{index + 1}위</div>
              <div className="Name">{store.name}</div>
              <div className="Star">★{store.rate} ({store.reviewCnt})</div>
              <div className="etc">
                {store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비 {store.deliveryFee}원
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default StoreItem;
