import React from "react";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import image from "../../assets/img/image.png";
import grayStar from "../../assets/img/grayStar.svg";
import { useNavigate } from "react-router-dom";
import { Rate, Salad, Star, StarText, Store, StoreContainer, StoreContent, StoreImg, StoreName } from "./Stores.styles";


const Stores = () => {

  const navigate = useNavigate()
  const handleNavigate = (store) => {
    navigate(`/store/${store.id}`)
  }

  return (
    <StoreContainer>
      <Salad>샐러드</Salad>
      {stores.map((store)=>(
        <Store key={store.id} onClick={()=> handleNavigate(store)}>
          <StoreImg src = {image} alt = "store"/>
          <StoreContent>
          {store.id<=3 ? <Rate>{store.id.toString()}위</Rate>:null}
          <StoreName>{store.name}</StoreName>
          <Star>
            <img src={grayStar} alt="별점" />
            <StarText>{`${store.rate} (${Intl.NumberFormat('en-US').format(store.reviewCnt)})`}</StarText>
          </Star>
          <StarText>{store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비 {store.deliveryFee}원</StarText>
          </StoreContent>
        </Store>
      ))}
      <div>
      </div>
      <OrderBar />
    </StoreContainer>
  );
};

export default Stores;
