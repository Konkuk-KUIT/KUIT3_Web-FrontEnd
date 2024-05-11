import React, { ReactElement } from 'react';
import { Products } from '../App';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface Props {
  products: Products[];
  filterText: string;
  inStockOnly: boolean;
}

const ProductTable: React.FC<Props> = ({
  products,
  filterText,
  inStockOnly,
}) => {
  const rows: ReactElement[] = [];
  let lastCategory: string | null = null;

  const productsCopy = [...products];

  const filteredProducts = productsCopy
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    .filter((product) => {
      const filterTextMatch = product.name
        .toLowerCase()
        .includes(filterText.toLowerCase());

      const inStockCheck = !inStockOnly || product.stocked;

      return filterTextMatch && inStockCheck;
    });

  filteredProducts.map((product, index) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category + index}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
