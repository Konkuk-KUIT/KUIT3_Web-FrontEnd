import React, { ReactElement } from "react";
import { Products } from "../App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface Props {
  products: Products[];
  filterText: string;
  inStockOnly: boolean;
  editProduct: (removeProduct: Products, newProduct: Products) => void;
  deleteProduct: (product: Products) => void;
}

const ProductTable: React.FC<Props> = ({
  products,
  filterText,
  inStockOnly,
  editProduct,
  deleteProduct,
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

      const inStockCheck = !inStockOnly || product.stocked; //체크박스가 체크되어 있지 않거나, stock애 있거나

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
      lastCategory = product.category;
    }
    rows.push(
      <ProductRow
        product={product}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
        key={product.name}
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
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
