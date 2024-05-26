import React from "react";
import useCartStore from "../../store/useCartStore";
import ItemImg from "../../asset/store/item-thumbnail.svg";
import * as SS from "../../pages/Store/Store.styles";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <SS.ListItem>
      <div>
        <img src={ItemImg} />
        <section>
          {menu.id === 1 ? (
            <p className="name">
              {menu.name} <div className="best">BEST</div>
            </p>
          ) : (
            <p className="name">{menu.name}</p>
          )}
          <p className="price">
            {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </p>
          <p className="ingredients">{menu.ingredients}</p>
        </section>
      </div>
      <SS.ItemGetBtn onClick={handleAddMenu}>담기</SS.ItemGetBtn>
    </SS.ListItem>
  );
};

export default MenuItem;
