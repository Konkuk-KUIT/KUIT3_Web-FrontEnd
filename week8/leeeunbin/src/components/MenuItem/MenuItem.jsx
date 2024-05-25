import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, resetCart } from "../../data-access/cart/actions";
import { Link } from "react-router-dom";
import "./MenuItem.scss"


const MenuItem = ({ menu, storeName }) => { 
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleAddMenu = () => {
    const newMenu = {
      store: storeName, 
      items: [
        {
          id: menu.id,
          category: menu.category,
          name: menu.name,
          price: menu.price,
          ingredients: menu.ingredients,
        },
      ],
    };

    const isDifferentStore = cartItems.some(item => item.store !== null && item.store !== storeName);

    if (isDifferentStore) {
      const confirmAdd = window.confirm("주문서에는 같은 가게만 담기 가능합니다. 초기화 후 진행할까요?");
      if (confirmAdd) {
        dispatch(resetCart());
        dispatch(addToCart(newMenu));
      }
    } else {
      dispatch(addToCart(newMenu));
    }
  };

  return (
    <div className>
      {menu && menu.name && (
        <>
        <div className="Menu">
          <div className="menuImg">
            <img src={`http://via.placeholder.com/54x54`} alt="placeholder" />
          </div>

          <div className="menuInfo">
            <div className="Name">{menu.name}</div>
            <div className="Price">{menu.price}</div>
            <div className="Ingredients">{menu.ingredients}</div>
          </div>

          <Link to = "/cart">
            <button className="Cart" onClick={handleAddMenu}>
              담기
            </button>
          </Link>
        </div>
        </>
      )}
    </div>
  );
};


export default MenuItem;

