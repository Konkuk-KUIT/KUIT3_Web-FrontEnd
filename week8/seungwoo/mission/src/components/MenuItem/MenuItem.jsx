import React from "react";
import useCartStore from "../../store/useCartStore";
import { insertComma } from "../../store/insertComma";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <div>
      <img src="http://via.placeholder.com/54x54" alt="" />
      <div><span>{menu.name}</span><span>{menu.isBest ? "BEST" : ""}</span></div>
      <span>{insertComma(menu.price)}원</span>
      <p>{menu.ingredients}</p>
      <button onClick={handleAddMenu} type="button">
        담기
      </button>
    </div>
  );
};

export default MenuItem;
