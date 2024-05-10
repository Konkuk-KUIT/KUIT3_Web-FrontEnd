import React, { useState } from "react";
import { Products } from "./data-access";
import { FilterableProductsTable } from "./components";

function App() {
  const initialProducts: Products[] = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const [products, setProducts] = useState<Products[]>(initialProducts);

  const handleDelete = (productToDelete: Products) => {
    const updatedProducts = products.filter(
      (product) => product !== productToDelete
    );
    setProducts(updatedProducts);
  };

  const handleEdit = () => {};

  return (
    <div className="App">
      <FilterableProductsTable
        products={products}
        setProducts={setProducts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;