import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import { setStore } from "../../data-access/menu/actions"; // setStore 액션을 가져옴
import Header from "../../components/header/Header";

import './Store.scss';

const Store = () => {
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수를 가져옴
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  useEffect(() => {
    if (store) {
      dispatch(setStore(store)); 
    }
  }, [dispatch, store]); 

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <>
      <Header />
      <div className="storeInfo">
        <div className="Name">{store.name}</div>
        <div className="review">
          <FontAwesomeIcon icon={faStar} color="#FFD158" /> {store.rate} 리뷰{store.reviewCnt}</div>
        <div className="payMethod">결제방법 {store.payMethod}</div>
        <div className="minDeliveryPrice">최소주문 {store.minDeliveryPrice}원</div>
        <div className="deliveryTime">배달시간 {store.deliveryTime}</div>
      </div>

      <div className="categoryName">
        {store.menus.reduce((uniqueCategories, menu) => {
          if (!uniqueCategories.includes(menu.category)) {
            uniqueCategories.push(menu.category);
        }
          return uniqueCategories;
        }, []).map((category, index) => (
          <span key={index}>{category}</span>
        ))}
      </div>
      
      <div className="menuInfo">
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} storeName={store.name} />;
        })}
      </div>
      <OrderBar />
    </>
  );
};

export default Store;
