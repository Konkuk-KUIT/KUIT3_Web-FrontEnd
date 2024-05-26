import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./StoreItem.scss";
import storesData from "../../models/stores";
import { useDispatch, useSelector } from "react-redux";
import { setStore} from "../../data-access/menu/actions";

const StoreItem = ({ categoryId }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.menu.store);

  useEffect(() => {
    dispatch(setStore(storesData));
  }, [dispatch]);

  const filteredStores = Object.keys(store)
    .map(key => store[key])
    .filter(store => store.menus.some(menu => menu.category === categoryId));

  return (
    <>
      {filteredStores.map((store, index) => (
        <Link to={`/${categoryId}/${store.id}`} key={store.id}>
          <div className="StoreInfo">
            <div className="storeImg">
              <img src={`http://via.placeholder.com/54x54`} alt="placeholder" />
            </div>
            <div className="Info">
              <div className="ranking">{index + 1}위</div>
              <div className="Name">{store.name}</div> 
              <div className="Star">★{store.rate} ({store.reviewCnt})</div>
              <div className="etc">
                {store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비 {store.deliveryFee}원
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default StoreItem;
