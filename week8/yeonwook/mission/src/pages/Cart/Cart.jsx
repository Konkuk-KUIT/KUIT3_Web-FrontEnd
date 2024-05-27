import React from "react";
import useCartStore from "../../store/useCartStore";
import alert from "../../assets/img/alert.svg";
import SelectedMenu from "../../components/SelectedMenu/SelectedMenu";
import { Alert, Info, NotEnough, NotEnoughText, CartName, EnoughText, More, EnableOrder, DisabledOrder, BottomBar, MinPrice, CostDiv, LText, RText, TotalL, TotalR, BottomDiv } from "./Cart.styles";


const Cart = () => {

  const store = useCartStore((state)=> state.store);
  const menu = useCartStore((state)=> state.menus);
  const total = useCartStore((state)=> state.total);

  const groupedMenu = menu.reduce((acc, item)=>{
    const found = acc.find((menu)=> menu.id === item.id);
    if(found){
      found.count += 1;
    }else{
      acc.push({...item, count:1});
    }
    return acc;
  }, [])

  return(
    
    <div>
      <Info>
        <CartName>{store.name}</CartName>
        { (total<store.minDeliveryPrice) ?
        <NotEnough>
          <NotEnoughText>최소금액 미달</NotEnoughText>
          <Alert src={alert} alt="!"/>
        </NotEnough>:
        <NotEnough>
          <EnoughText>주문 가능</EnoughText>
        </NotEnough>
        }
      </Info>
      {groupedMenu.map((menu)=>{
        return <SelectedMenu key={menu.id} groupedMenu={menu}/> 
      })}

      <More>더 담기 +</More>

      <BottomDiv>
        <CostDiv>
          <LText>주문금액</LText>
          <RText>{total}원</RText>
        </CostDiv>
        <CostDiv>
          <LText>배달요금</LText>
          <RText>{store.deliveryFee}원</RText>
        </CostDiv>
        <CostDiv>
          <TotalL>총 결제 금액</TotalL>
          <TotalR>{total + store.deliveryFee}원</TotalR>
        </CostDiv>
      </BottomDiv>

      <BottomBar>
       <MinPrice>최소 주문금액 {store.minDeliveryPrice}원</MinPrice>
       {(total + store.deliveryFee > store.minDeliveryPrice)?
       <EnableOrder>{total + store.deliveryFee}원 결제하기</EnableOrder>:
       <DisabledOrder>{total + store.deliveryFee}원 결제하기</DisabledOrder>}
      </BottomBar>
    </div>
  )
};

export default Cart;
