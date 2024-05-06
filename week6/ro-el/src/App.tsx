import React from "react";
import FilterableProductTable from "./components/FilterableProductTable";

export interface Products {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

function App() {
  const initialProducts: Products[] = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Dragonfruit",
    },
    {
      category: "Fruits",
      price: "$2",
      stocked: false,
      name: "Passionfruit",
    },
    {
      category: "Vegetables",
      price: "$2",
      stocked: true,
      name: "Spinach",
    },
    {
      category: "Vegetables",
      price: "$4",
      stocked: false,
      name: "Pumpkin",
    },
    {
      category: "Vegetables",
      price: "$1",
      stocked: true,
      name: "Peas",
    },
  ];

  return (
    <div className="App">
      <FilterableProductTable products={initialProducts} />
    </div>
  );
}

export default App;
