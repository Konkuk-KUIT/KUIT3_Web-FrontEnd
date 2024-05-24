import React /*, { useEffect }*/ from "react";
import { useNavigate, useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";

import YellowStar from "../../assets/star-yellow.svg";
import LeftChevron from "../../assets/left-chevron.svg";
import * as S from "./Store.styles.jsx";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const navigate = useNavigate();
  const navigateToStoreListPage = () => {
    navigate("/store");
  };

  // useEffect(() => {
  //   //나머지가 모두 실행된 이후에 실행
  //   if (store) {
  //     setStore(store);
  //   }
  // }, [store]); //빈 배열인 경우, 처음 렌더링 될 때 한 번만 함수가 실행됨

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <S.StoreBox>
      <S.Header>
        <S.BackBtn onClick={navigateToStoreListPage}>
          <img src={LeftChevron} alt="뒤로가기" />
        </S.BackBtn>
      </S.Header>
      <S.StoreInfoSection>
        <h1>{store.name}</h1>

        <S.StoreReviewContainerBox>
          <S.StoreReviewRateBox>
            <img src={YellowStar} alt="별" />
            <span>{store.rate}</span>
          </S.StoreReviewRateBox>
          <S.StoreReviewCountBox>
            <span>리뷰 {store.reviewCnt.toLocaleString('ko-KR')}</span>
          </S.StoreReviewCountBox>
        </S.StoreReviewContainerBox>

        <S.StoreOrderContainerBox>
          <S.StoreOrderBox>
            <span>결제 방법</span>
            <span>토스결제만. 현장결제 불가능</span>
          </S.StoreOrderBox>
          <S.StoreOrderBox>
            <span>최소 주문</span>
            <span>{store.minDeliveryPrice.toLocaleString('ko-KR')}</span>
          </S.StoreOrderBox>
          <S.StoreOrderBox>
            <span>배달 시간</span>
            <span>
              약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
            </span>
          </S.StoreOrderBox>
        </S.StoreOrderContainerBox>
      </S.StoreInfoSection>

      <S.StoreMenuSection>
        <S.CategoryH3>샐러드</S.CategoryH3>
        <S.StoreMenuList>
          {store.menus.map((menu) => {
            return <MenuItem key={menu.id} menu={menu} store={store} />;
          })}
        </S.StoreMenuList>
      </S.StoreMenuSection>

      <OrderBar />
    </S.StoreBox>
  );
};

export default Store;
