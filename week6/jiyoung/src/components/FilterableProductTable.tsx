import React, { useState } from "react";
import { Product } from "../App";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

interface Props {
    products: Product[];
}

const FilterableProductTable: React.FC<Props> = ({ products }) => {
    // 유저가 입력하는 문자열 state
    const [filterText, setFilterText] = useState<string>('');

    // 체크박스 선택 여부 state
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
};

export default FilterableProductTable;