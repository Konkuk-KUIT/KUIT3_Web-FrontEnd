import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import useCartStore from "../../store/useCartStore";
import star from "../../assets/img/star.svg"
import { Details, Modal, ModalCancel, ModalConfirm, ModalContent, ModalSubTitle, ModalTitle, RateContainer, RateReview, Salad, StoreName, TopDiv } from "./Store.styles";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  const setStore = useCartStore((state) => state.setStore);
  const resetMenu = useCartStore((state) => state.resetMenu);
  const addMenu = useCartStore((state) => state.addMenu);
  const newMenu = useCartStore((state)=>state.newMenu);

  const [modalState,setModalState] = useState(false);

  const newOrder = (menu)=>{
    resetMenu()
    addMenu(menu)
    setModalState(false)
  }

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store]);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <TopDiv>
      <StoreName>{store.name}</StoreName>
      <RateContainer>
        <img src={star} alt="" />
        <RateReview>{store.rate}</RateReview>
        <RateReview>리뷰 {Intl.NumberFormat('en-US').format(store.reviewCnt)}</RateReview>
      </RateContainer>
      <RateContainer>
        <Details>결제 방법</Details>
        <Details>{store.howToPay}</Details>
      </RateContainer>
      <RateContainer>
        <Details>최소 주문</Details>
        <Details>{store.minDeliveryPrice}원</Details>
      </RateContainer>
      <RateContainer>
        <Details>배달 시간</Details>
        <Details>약 {store.minDeliveryTime}~{store.maxDeliveryTime}분</Details>
      </RateContainer>
      <Salad>샐러드</Salad>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} setModalState={setModalState} />;
        })}
      </div>
      <OrderBar />
      {modalState ?
      <Modal>
        <ModalContent>
          <ModalTitle>주문서에는 같은 가게만 담을 수 있어요</ModalTitle>
          <ModalSubTitle>새로 담고 이전에 담은 메뉴는 삭제할까요?</ModalSubTitle>
          <div>
            <ModalCancel onClick={()=>setModalState(false)}>취소</ModalCancel>
            <ModalConfirm onClick={()=>newOrder(newMenu)}>새로담기</ModalConfirm>
          </div>
        </ModalContent>
      </Modal>:
      null}
    </TopDiv>
  );
};

export default Store;
