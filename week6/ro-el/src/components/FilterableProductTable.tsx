import React, { useState } from "react";
import { Products } from "../App";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import InputBar from "./InputBar";
import uuid from "react-uuid";

interface Props {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
}

const FilterableProductTable: React.FC<Props> = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState<string>(""); //SearchBar로부터 전달 받은 문자열
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const emptyProduct: Products = {
    id: uuid(),
    category: "",
    price: "",
    stocked: true,
    name: "",
  };

  const addProduct = (newProduct: Products) => {
    setProducts((previousData: Products[]) => [...previousData, newProduct]);
  };

  const deleteProduct = (removeProduct: Products) => {
    setProducts((previousData: Products[]) =>
      [...previousData.filter((product) => product.id !== removeProduct.id)]
    );
  };

  const editProduct = (removeProduct: Products, newProduct: Products) => {
    setProducts((previousData: Products[]) => [
      ...previousData.filter((product) => product.id !== removeProduct.id),
      newProduct,
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
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
      <InputBar product={emptyProduct} addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
