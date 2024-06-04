import React from "react";
import useCartStore from "../../store/useCartStore";
import { MenuItemContainer, MenuItemTitle, MenuItemDescription, MenuItemPrice
  ,MenuItemPhoto, InfoStore,Menuget } from './MenuItem.styles';
import onAddMenu from "../../pages/Store/Store";

const MenuItem = ({ menu,onAddMenu }) => {
  const addMenu = useCartStore((state) => state.addMenu);



  return (
    <>
      <MenuItemContainer>
        <MenuItemPhoto />
        <span>
          <MenuItemTitle>{menu.name}</MenuItemTitle>
          <MenuItemPrice>{menu.price}</MenuItemPrice>
          <MenuItemDescription>{menu.ingredients}</MenuItemDescription>
        </span>
          <Menuget onClick={onAddMenu} type="button">
              담기
          </Menuget>
      </MenuItemContainer>
    </>
  );
};

export default MenuItem;
