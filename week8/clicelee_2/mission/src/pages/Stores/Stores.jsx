import React from "react";
import { Link } from "react-router-dom";
import stores from "../../models/stores";

const Stores = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">샐러드</h1>
      <div>
        {stores.map((store) => (
          <div key={store.id} className="border p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">
              <Link to={`/store/${store.id}`}>{store.name}</Link>
            </h2>
            <div className="text-gray-600 mb-1">⭐️{store.rate} ({store.reviewCnt})</div>
            <div className="text-gray-600 mb-1">
              배달 시간: {store.minDeliveryTime}분~ {store.maxDeliveryTime}분
            </div>
            <div className="text-gray-600">
              배달비: {store.deliveryFee}원
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
