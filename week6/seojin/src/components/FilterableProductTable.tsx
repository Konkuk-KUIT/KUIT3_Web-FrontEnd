import React, { useState } from "react";
import { Products } from "../App";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";
import uuid from "react-uuid";

interface Props {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
}

const FilterableProductTable: React.FC<Props> = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const emptyProduct: Products = {
    id: uuid(),
    category: "",
    price: 0,
    stocked: true,
    name: "",
  };

  const addProduct = (newProduct: Products) => {
    setProducts((previousData: Products[]) => [...previousData, newProduct]);
  };

  const deleteProduct = (removeProduct: Products) => {
    setProducts((previousData: Products[]) => [
      ...previousData.filter((product) => product.id !== removeProduct.id),
    ]);
  };
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
      />
      <InputBar product={emptyProduct} addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
