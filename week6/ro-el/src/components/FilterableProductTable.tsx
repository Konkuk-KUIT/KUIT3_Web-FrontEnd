import React, { useState } from "react";
import { Product } from "../App";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import InputBar from "./InputBar";
import uuid from "react-uuid";

interface Props {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const FilterableProductTable: React.FC<Props> = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState<string>(""); //SearchBar로부터 전달 받은 문자열
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const emptyProduct: Product = {
    id: uuid(),
    category: "",
    price: 0,
    stocked: true,
    name: "",
  };

  const addProduct = (newProduct: Product) => {
    setProducts((previousData: Product[]) => [...previousData, newProduct]);
  };

  const deleteProduct = (removeProduct: Product) => {
    setProducts((previousData: Product[]) =>
      [...previousData.filter((product) => product.id !== removeProduct.id)]
    );
  };

  const editProduct = (removeProduct: Product, newProduct: Product) => {
    setProducts((previousData: Product[]) => [
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
        addProduct={addProduct}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
      <InputBar product={emptyProduct} addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
