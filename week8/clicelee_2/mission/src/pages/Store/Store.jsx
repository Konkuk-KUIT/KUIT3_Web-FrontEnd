// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";

// import MenuItem from "../../components/MenuItem/MenuItem";
// import OrderBar from "../../components/OrderBar/OrderBar";

// import stores from "../../models/stores";
// import useCartStore from "../../store/useCartStore";

// const Store = () => {
//   const { storeId } = useParams();

//   const store = stores.find((s) => s.id.toString() === storeId);

//   const setStore = useCartStore((state) => state.setStore);

//   useEffect(() => {
//     if (store) {
//       setStore(store);
//     }
//   }, [store]);

//   if (!store) {
//     return <div className="text-center mt-8 text-gray-600">가게를 찾을 수 없어요 🥺</div>;
//   }

//   return (
//     <div className="px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">{store.name}</h1>
//       <div>
//         {store.menus.map((menu) => {
//           return <MenuItem key={menu.id} menu={menu} />;
//         })}
//       </div>
//       <OrderBar />
//     </div>
//   );
// };

// export default Store;
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store]);

  if (!store) {
    return <div className="text-center mt-8 text-gray-600">가게를 찾을 수 없어요 🥺</div>;
  }

  const handleOrder = () => {
    setStore(store);
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{store.name}</h1>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      {/* 주문하기 버튼 클릭 시 '/cart' 페이지로 이동하도록 Link 컴포넌트를 사용합니다. */}
      <Link to="/cart">
        <button onClick={handleOrder} type="button">
          주문하기
        </button>
      </Link>
      <OrderBar />
    </div>
  );
};

export default Store;
