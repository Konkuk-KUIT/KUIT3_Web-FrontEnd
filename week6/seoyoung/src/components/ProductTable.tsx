import React, { Fragment, ReactElement } from "react";
import { Products } from "../App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface GroupedProducts {
  category: string;
  products: Products[];
}

interface Props {
  products: Products[]; 
  filterText: string;
  inStockOnly: boolean;
  onDeleteProduct: (productId: string) => void;
}

const ProductTable: React.FC<Props> = ({ products, filterText, inStockOnly, onDeleteProduct }) => {
  const filteredProducts = products.filter(
    (product) =>
      (!inStockOnly || product.stocked) &&
        product.name.toLowerCase().includes(filterText.toLowerCase())
  );  

  const groupedProductsByCategory = Object.values(
    filteredProducts.reduce((acc, product) => {
      const { category } = product;
      acc[category] = acc[category] || { category, products: [] };
      acc[category].products.push(product);

      return acc;
    }, {} as { [category: string]: GroupedProducts })
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>D</th>
        </tr>
      </thead>
      <tbody>
        {groupedProductsByCategory.map((ProductCategory) => {
          return (
            <Fragment key={ProductCategory.category}>
              <ProductCategoryRow category={ProductCategory.category} />
              {ProductCategory.products.map((product) => (
                <ProductRow key={product.id} product={product} onDelete={onDeleteProduct}/>
              ))}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;