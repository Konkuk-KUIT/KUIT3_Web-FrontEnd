import React, { useState } from "react";
import FilterableProductsTable from "./components/FilterableProductTable";

export interface Products {
  id: string;
  category: string;
  price: number;
  stocked: boolean;
  name: string;
}

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
