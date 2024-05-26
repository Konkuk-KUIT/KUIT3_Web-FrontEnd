import React from "react";
import { Link } from "react-router-dom";
import { StoreHeader } from "../Stores/Stores";
import useCartStore from "../../store/useCartStore";
import * as C from "./Cart.styles";
import RWImg from "../../asset/cart/red-warning.svg";
import HIImg from "../../asset/home-indicator.svg";
import * as S from "../../pages/Stores/Stores.styles";
import * as SS from "../../pages/Store/Store.styles";

import ItemImg from "../../asset/store/item-thumbnail.svg";

const CartItem = ({ menu }) => {
  return (
    <SS.ListItem>
      <div>
        <img src={ItemImg} />
        <section>
          <p className="name">{menu.name}</p>
          <p className="ingredients">{menu.ingredients}</p>
          <p className="price">
            {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </p>
        </section>
      </div>
      <div className="count">{menu.count}개 &nbsp;&nbsp;&gt;</div>
    </SS.ListItem>
  );
};

const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const totalPrice =
    menus.reduce((acc, cur) => acc + cur.price, 0) + store?.deliveryFee;

  const cartMenus = menus.reduce((acc, menu) => {
    const existingMenu = acc.find((item) => item.id === menu.id);
    if (existingMenu) {
      existingMenu.count += 1;
    } else {
      acc.push({ ...menu, count: 1 });
    }
    return acc;
  }, []);
  //console.log(cartMenus);

  return (
    <>
      <StoreHeader />
      <C.BorderBar />
      <C.CartInfo>
        <section className="storeName">
          <div className="name">{store?.name}</div>
          {totalPrice < store?.minDeliveryPrice && (
            <div>
              <div className="warn">최소금액 미달</div>
              <img src={RWImg} />
            </div>
          )}
        </section>
        {cartMenus.map((menu) => (
          <CartItem key={menu.id} menu={menu} />
        ))}
      </C.CartInfo>
      <Link to={`/store/${store?.id}`}>
        <C.MoreAdd>더 담기 +</C.MoreAdd>
      </Link>
      <C.BorderBar />
      <C.WBorderBar />
      <C.Price>
        <div className="text">주문금액</div>
        <div className="price">
          {menus
            .reduce((acc, cur) => acc + cur.price, 0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </div>
      </C.Price>
      <C.Price>
        <div className="text">배달요금</div>
        <div className="price">
          {store?.deliveryFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </div>
      </C.Price>
      <C.TotalPrice>
        <div className="text">총 결제 금액</div>
        <div className="price">
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </div>
      </C.TotalPrice>
      <C.OrderPay>
        <div className="minOrder">
          최소 주문금액
          {store?.minDeliveryPrice
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </div>
        {totalPrice < store?.minDeliveryPrice ? (
          <div className="orderBtnDisable">
            {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            결제하기
          </div>
        ) : (
          <div className="orderBtn">
            {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            결제하기
          </div>
        )}
        <S.HomeIndicator>
          <img src={HIImg} />
        </S.HomeIndicator>
      </C.OrderPay>
    </>
  );
};

export default Cart;
