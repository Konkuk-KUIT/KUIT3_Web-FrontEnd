import React, { ReactElement } from "react";
import { Product } from "../App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface Props {
    products: Product[];
}

const ProductTable: React.FC<Props> = ({ products }) => {
    const rows: ReactElement[] = [];
    let lastCategory: string | null = null;

    products.map((product, index) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category + index} />
            );
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    })

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