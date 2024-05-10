import React, { useState } from 'react';
import { Products } from '../App';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import InputBar from './InputBar';

interface Props {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
}

const FilterableProductTable: React.FC<Props> = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

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
        setProducts={setProducts}
      />

      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;