import React, { ReactElement } from "react";
import { Product } from "../App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface Props {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
  addProduct: (product: Product) => void;
  editProduct: (removeProduct: Product, newProduct: Product) => void;
  deleteProduct: (product: Product) => void;
}

const ProductTable: React.FC<Props> = ({
  products,
  filterText,
  inStockOnly,
  addProduct,
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
        addProduct={addProduct}
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
