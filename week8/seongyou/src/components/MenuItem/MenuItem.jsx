import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
`;

const FoodInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FoodName = styled.h3`
  margin-top: 16px;
  margin-bottom: 0px;
  font-size: 17px;
  font-weight: 600;  
`;

const BestTag = styled.span`
  margin-left: 6px;
  color: #3182F6;
  font-size: 17px;
  font-weight: 600;
`;

const Price = styled.span`
  margin-top: 5px;
  margin-bottom: 0px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`
const Ingredients = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`
const OrderBtn = styled.button`
  margin-right: 24px;
  width: 52px;
  height: 32px;
  border-radius: 8px;
  border: 0px;
  color: white;
  background-color: #3182F6;
  font-size: 13px;
`

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <StyledDiv1>
      <FoodInfo>
        <FoodName>
          {menu.name}
          {menu.isBest && <BestTag>BEST</BestTag>}
        </FoodName> 
        <Price>{menu.price.toLocaleString("ko-KR")}원</Price>
        <Ingredients>{menu.ingredients}</Ingredients>
      </FoodInfo>
      <OrderBtn onClick={handleAddMenu} type="button">
        담기
      </OrderBtn>
    </StyledDiv1>
  );
};

export default MenuItem;

/**
 * 
 * AS-IS
*     {
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
      },

  TO-BE
      {
        storeId: 1,
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
      },

interface Menu {
  storeId: number,
  id: number,
  name: string,
  isBest: boolean,
  price: number,
  ingredients: string
}

const menuGroup = menus.reduce((acc, prev) => {
  return {
    ...prev,
    [acc.storeId]: [
      ...prev[acc.storeId],
      acc
    ]
  }
}, {})

const menuGroup = {
  1: [
      {
        storeId: 1,
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
      },
      {
        storeId: 1,
        id: 2,
        name: "펌프킨 넛 샐러드",
        isBest: false,
        price: 8700,
        ingredients: "호박, 피칸, 크랜베리, 아루굴라, 발사믹 드레싱",
      },
  ],
  2: [
      {
        storeId: 2,
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
        count: 2,
      },
      {
        storeId: 2,
        id: 2,
        name: "펌프킨 넛 샐러드",
        isBest: false,
        price: 8700,
        ingredients: "호박, 피칸, 크랜베리, 아루굴라, 발사믹 드레싱",
        count: 3,
      },
  ]
}

if (store != null && menus.length > 0) { alert('장바구니에는 하나의 가게만 담을 수 있음') }

const totalPricePerStore = menus.reduce((acc, prev) => {
  return acc.price * acc.count + prev
}, 0)
// 9200 * 2 + 8700 * 3

{ store.minBlah > totalPricePerStore && <span>최소 금액 미달</span> }

const dict = { foo: 'a', bar: 'b' }
Object.keys(dict) // ['foo', 'bar']

const storeIds = Object.keys(menuGroup) // [1, 2]

...

{storeIds.map((storeId) => {
  return (
    <CartItem storeId={storeId} menus={menuGroup[storeId]} />
  )
})}

 */