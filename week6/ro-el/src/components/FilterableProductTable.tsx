import React, { useState } from "react";
import { Products } from "../App";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import InputBar from "./InputBar";

interface Props {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
}

const FilterableProductTable: React.FC<Props> = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState<string>(""); //SearchBar로부터 전달 받은 문자열
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const emptyProduct: Products = {
    category: "",
    price: "",
    stocked: true,
    name: "",
  };

  const addProduct = (newProduct: Products) => {
    setProducts((previousData: Products[]) => [...previousData, newProduct]);
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
      />
      <InputBar product={emptyProduct} addProduct={addProduct}/>
    </div>
  );
};

export default FilterableProductTable;
