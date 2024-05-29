import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

// 이미지 import
import boxImage from "../../img/box.png";

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((s) => s.id.toString() === storeId);
  const setStore = useCartStore((state) => state.setStore);
  const addMenu = useCartStore((state) => state.addMenu);

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store]);

  if (!store) {
    return <div className="min-h-screen flex items-center justify-center text-gray-600">가게를 찾을 수 없어요 🥺</div>;
  }

  const handleOrder = () => {
    setStore(store);
  };

  const handleAddMenu = (menu) => {
    addMenu(menu);
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{store.name}</h1>
      <div className="text-gray-600 mb-1">⭐️ {store.rate} 리뷰{store.reviewCnt}</div>

      <div className="text-gray-600">
        최소주문: {store.minDeliveryPrice}원
      </div>
      <div className="text-gray-600 mb-1">
        배달 시간: {store.minDeliveryTime}분~{store.maxDeliveryTime}분
      </div>
      <div class="border-t border-gray-300"></div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {store.menus.map((menu) => {
          return (
            <div key={menu.id} className="flex items-center"> {/* Flexbox 추가 */}
              <img src={boxImage} alt="Box" className="w-12 h-12 mr-4" />
              <div className="flex-grow">
                <MenuItem menu={menu} />
              </div>
              
              <button
                onClick={() => handleAddMenu(menu)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                담기
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <OrderBar />
      </div>
    </div>
  );
};

export default Store;
