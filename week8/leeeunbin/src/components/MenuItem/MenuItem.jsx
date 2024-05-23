import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../data-access/cart/actions";
import { Link } from "react-router-dom";
import "./MenuItem.scss"


const MenuItem = ({ menu, storeName }) => { 
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

    dispatch(addToCart(newMenu));
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

