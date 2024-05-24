import React from "react";
import useCartStore from "../../store/useCartStore";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const handleOrder = () => {};
  const store = useCartStore((state) => state.store);

  return (
    <div>
      <div>총 주문금액</div>
      <div>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</div>
      <button onClick={handleOrder} type="button">
        {/* store? => store가 존재할 때에만 뒤에 있는 부분이 실행됨 */}
        {store?.name}에서 주문하기
      </button>
    </div>
  );
};

export default OrderBar;
