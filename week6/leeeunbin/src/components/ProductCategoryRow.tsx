import React from "react";
import { Products } from '../data-access'; 

interface Props {
  category : string;
}

const ProductCategoryRow : React.FC<Props>= ( {category} ) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
}

export default ProductCategoryRow;