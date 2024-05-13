import React, { useState } from "react";
import FilterableProductsTable from "./components/FilterableProductTable";

// Products -> Product로 바꾸는 것이 맞다.
// 이미 선언을 하고 많이 쓰여서 일단은 놔두는 걸로...
export interface Products {
  // id 속성 추가
  id: string;
  category: string;

  // price는 number로 선언하는 것이 맞다.
  price: number;
  stocked: boolean;
  name: string;
}

// id 속성 추가
// price가 string->number로 바뀌었으므로 price들의 type을 number로 변경
const initialProducts: Products[] = [
  { id: "1", category: "Fruits", price: 1, stocked: true, name: "Apple" },
  {
    id: "2",
    category: "Fruits",
    price: 1,
    stocked: true,
    name: "Dragonfruit",
  },
  {
    id: "3",
    category: "Fruits",
    price: 2,
    stocked: false,
    name: "Passionfruit",
  },
  {
    id: "4",
    category: "Vegetables",
    price: 2,
    stocked: true,
    name: "Spinach",
  },
  {
    id: "5",
    category: "Vegetables",
    price: 4,
    stocked: false,
    name: "Pumpkin",
  },
  {
    id: "6",
    category: "Vegetables",
    price: 1,
    stocked: true,
    name: "Peas",
  },
];

function App() {
  const [products, setProducts] = useState<Products[]>(initialProducts);

  return (
    <div className="App">
      <FilterableProductsTable products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
