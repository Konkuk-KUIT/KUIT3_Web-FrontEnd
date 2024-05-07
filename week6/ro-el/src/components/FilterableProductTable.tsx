import React, { useState } from 'react'
import { Products } from '../App'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

interface Props {
  products: Products[];
}

const FilterableProductTable: React.FC<Props> = ({products}) => {
  const [filterText, setFilterText] = useState<string>(""); //SearchBar로부터 전달 받은 문자열
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
    </div>
  )
}

export default FilterableProductTable