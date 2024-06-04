import React from "react";
import useCartStore from "../../store/useCartStore";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <div>
      <h3>{menu.name}</h3>
      <span>{menu.price}</span>
      <p>{menu.ingredients}</p>
      <button onClick={handleAddMenu} type="button">
        담기
      </button>
    </div>
  );
};

export default MenuItem;
