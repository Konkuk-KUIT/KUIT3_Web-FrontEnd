import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";

const BackButton = styled.button`
background-color:transparent;
border: none;
cursor: pointer;
padding: 10px;
display: flex;
align-items: center;


img {
  width: 24px;
  height: 24px;
}
`

const StoreRating = styled.span`
margin-left:40px;
display: flex;
justify-content: start ;
gap:10px;
font-size: 0.9em;
color: #666;
`;

const StoreTitle = styled.h1`
margin-left:40px;
display: flex;
justify-content: start ;
`;

const StoreInfo = styled.div`
border: 1px solid #ddd;
`



const Store = () => {
  const navigate = useNavigate();
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);
  const currentStore = useCartStore((state) => state.store);
  const addMenu = useCartStore((state) => state.addMenu);
  
  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store, setStore]);
  
  const handleAddMenu = (menu) => {
    if (currentStore && currentStore.id !== menu.storeId) {
      alert('다른 가게의 메뉴가 이미 담겨있습니다.');
    } else {
      addMenu(menu);
    }
  };

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div className="storecategory">
      <BackButton className="backbutton" type="button" onClick={() => navigate(-1)}>
        <img src="/backarrow.svg" alt="SVG Icon"></img>
      </BackButton>
      <StoreInfo>
      <StoreTitle>{store.name}</StoreTitle>
            <StoreRating>
                <span>⭐ {store.rate}</span>
                <span>리뷰 {store.reviewCnt}</span>
            </StoreRating>
            <ul class="store-details">
                <p>결제방법: 토스결제만 현장결제 안됨</p>
                <p>최소주문: {store.minDeliveryPrice}원</p>
                <p>배달시간: 약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</p>
            </ul>
      </StoreInfo>
      <div>
        <h3>샐러드</h3>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} 
          onAddMenu={() => handleAddMenu(menu)}
          />
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
