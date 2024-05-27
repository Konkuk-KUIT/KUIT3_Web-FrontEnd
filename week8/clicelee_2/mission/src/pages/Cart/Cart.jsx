import React from "react";
import useCartStore from "../../store/useCartStore";

const Cart = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const removeMenu = useCartStore((state) => state.removeMenu);

  if (!store) {
    return <div className="text-center mt-8 text-gray-600">카트에 담긴 상품이 없습니다 🛒</div>;
  }

  // 메뉴 항목을 집계합니다.
  const aggregatedMenus = menus.reduce((acc, menu) => {
    const existingMenu = acc.find((item) => item.id === menu.id);
    if (existingMenu) {
      existingMenu.quantity += 1;
    } else {
      acc.push({ ...menu, quantity: 1 });
    }
    return acc;
  }, []);

  const totalOrderPrice = aggregatedMenus.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const totalPrice = totalOrderPrice + store.deliveryFee;

  const handleRemoveMenu = (menuId) => {
    removeMenu(menuId);
  };

  // 최소 주문 금액에 미달하는지 확인
  const isBelowMinimumOrder = totalOrderPrice < store.minDeliveryPrice;

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{store.name}</h1>
      <div className="grid grid-cols-1 gap-4">
        {aggregatedMenus.map((menu) => (
          <div key={menu.id} className="bg-white shadow-md rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{menu.name}</h2>
              <div className="text-gray-600 mb-2">가격: {menu.price}원</div>
              <div className="text-gray-600 mb-4">수량: {menu.quantity}개</div>
              <button onClick={() => handleRemoveMenu(menu.id)} className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">삭제</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-4">
        <div className="text-xl mb-4">주문 금액: {totalOrderPrice}원</div>
        <div className="text-xl mb-4">배달 요금: {store.deliveryFee}원</div>
        <div className="text-2xl font-bold">총 결제 금액: {totalPrice}원</div>
        {/* 최소 주문 금액 미달 시 버튼 비활성화 */}
        <button disabled={isBelowMinimumOrder} className={`mt-6 px-6 py-3 ${isBelowMinimumOrder ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'} rounded-lg transition duration-300`}>주문하기</button>
        {/* 최소 주문 금액 미달 시 안내 메시지 표시 */}
        {isBelowMinimumOrder && <div className="mt-2 text-red-500">최소 주문 금액 미달</div>}
      </div>
    </div>
  );
};

export default Cart;
