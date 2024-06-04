import React from "react";

import stores from "../../models/stores";

import * as S from "./Stores.styles.jsx";
import StoreItem from "../../components/StoreItem/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar.jsx";
import LeftChevron from "../../assets/left-chevron.svg";

const Stores = () => {
  const navigateToPreviousPage = () => {};

  return (
    <S.StoresBox>
      <S.Header>
        <S.BackBtn>
          <img src={LeftChevron} alt="뒤로가기" onClick={navigateToPreviousPage}/>
        </S.BackBtn>
      </S.Header>
      <S.CategoryTitle>샐러드</S.CategoryTitle>
      <S.StoreList>
        {stores.map((store) => {
          return <StoreItem key={store.id} store={store}/>;
        })}
      </S.StoreList>
      <OrderBar />
    </S.StoresBox>
  );
};

export default Stores;
