import React from 'react';
import FilterableProductTable from './FilterableProductTable';

interface Product{
  id: string;
  category: string;
  price: string;
  stocked: boolean;
  name: string;

}
function App() {
  const initialProduct: Product[]=[
    { id: "1", category: "Fruits", price: "1", stocked: true, name: "Apple" },
    {
      id: "2",
      category: "Fruits",
      price: "1",
      stocked: true,
      name: "Dragonfruit",
    },
    {
      id: "3",
      category: "Fruits",
      price: "2",
      stocked: false,
      name: "Passionfruit",
    },
    {
      id: "4",
      category: "Vegetables",
      price: "2",
      stocked: true,
      name: "Spinach",
    },
    {
      id: "5",
      category: "Vegetables",
      price: "4",
      stocked: false,
      name: "Pumpkin",
    },
    {
      id: "6",
      category: "Vegetables",
      price: "1",
      stocked: true,
      name: "Peas",
    },
  ]
  return (
    <div className="App">
      <FilterableProductTable></FilterableProductTable>
    </div>
  );
}

export default App;
