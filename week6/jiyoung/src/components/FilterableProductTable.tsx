import React, { useState } from "react";
import { Product } from "../App";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./inputBar";

interface Props {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const FilterableProductTable: React.FC<Props> = ({ products, setProducts }) => {
    // 유저가 입력하는 문자열 state
    const [filterText, setFilterText] = useState<string>('');

    // 체크박스 선택 여부 state
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    // 빈 product 임시 배열
    const emptyProduct: Product = {
        category: '',
        price: '',
        stocked: true,
        name: '',
    }

    // 배열을 추가하는 함수
    const addProduct = (newProduct: Product) => {
        setProducts((preData: Product[]) => [...preData, newProduct]);
    }

    // [미션-필수] deleteProduct

    // [미션-선택] editProduct

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
            />
            <InputBar
                product={emptyProduct}
                addProduct={addProduct}
            />
        </div>
    );
};

export default FilterableProductTable;