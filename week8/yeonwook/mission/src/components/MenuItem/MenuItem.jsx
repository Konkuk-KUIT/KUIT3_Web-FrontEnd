import React from "react";
import useCartStore from "../../store/useCartStore";
import imageCircle from "../../assets/img/imageCircle.svg"
import stores from "../../models/stores";
import {Damgi, MenuContainer, MenuName, MenuImg, Best, NameContainer, MenuDetails} from "./MenuItem.styles";

const MenuItem = ({ menu, setModalState }) => {
  const store = useCartStore((state)=>state.store);
  const menus = useCartStore((state)=>state.menus);
  const addMenu = useCartStore((state) => state.addMenu);
  const setNewMenu = useCartStore((state)=>state.setNewMenu);

  const handleAddMenu = () => {
    const storeNow = stores.find((s)=> s.id ===store.id);
    if(menus.length === 0){
      addMenu(menu);
    }else{
      if(storeNow.menus.some((m)=> m.name === menus[0].name)){
        addMenu(menu);
      }else{
        setModalState(true);
        setNewMenu(menu);
      }
    }
  }

  return (
    <MenuContainer>
      <MenuImg src={imageCircle} alt="상품이미지" />
      <div>
        {menu.isBest ? 
        <NameContainer>
          <MenuName>{menu.name}</MenuName>
          <Best>BEST</Best>
        </NameContainer>
        :
        <MenuName>{menu.name}</MenuName>}
        <MenuDetails>{menu.price}원</MenuDetails>
        <MenuDetails>{menu.ingredients}</MenuDetails>
      </div>
      <Damgi onClick={handleAddMenu} type="button">
        담기
      </Damgi>
    </MenuContainer>
  );
};

export default MenuItem;
