import React, { ReactElement } from "react";
import { Products } from "../data-access";
import { ProductCategoryRow, ProductRow } from "../components";

interface Props {
  products: Products[];
  filterText: string;
  inStockOnly: boolean;
  onDelete: (product: Products) => void;
  onEdit: (product: Products) => void;
}

const ProductTable: React.FC<Props> = ({ products, filterText, inStockOnly, onDelete, onEdit }) => {
  const rows: ReactElement[] = [];
  let currentCategory: string | null = null;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterText.toLowerCase()) &&
    (!inStockOnly || product.stocked)
  );

  filteredProducts.forEach((product, index) => {
    if (product.category !== currentCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category + index}
        />
      );
      currentCategory = product.category;
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
        onEdit = {onEdit}
        onDelete={onDelete}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default ProductTable;