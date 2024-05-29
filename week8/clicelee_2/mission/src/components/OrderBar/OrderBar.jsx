import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/useCartStore";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <div>
  <div class="flex flex-col">
    <div class="border-t border-gray-300"></div>
    <div className="mt-4">총 주문금액</div>
    <div className="mt-1">{menus.reduce((acc, cur) => acc + cur.price, 0)}원</div>
    <button onClick={handleOrder} type="button" className="inline-block px-6 py-3 mt-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ml-auto">
      {store?.name}에서 주문하기
    </button>
  </div>

    </div>
  );
};

export default OrderBar;
