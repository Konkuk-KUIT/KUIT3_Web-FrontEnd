import React from 'react'
import { Products } from '../App'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

interface Props {
  products: Products[];
}

const FilterableProductTable: React.FC<Props> = ({products}) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  )
}

export default FilterableProductTable