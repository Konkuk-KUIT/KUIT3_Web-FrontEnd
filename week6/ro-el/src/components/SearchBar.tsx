import React, { ChangeEvent } from "react";

interface Props {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  onInStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<Props> = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterTextChange(e.target.value); //e.target.value: 우리가 작성한 문자열
    //작성한 문자열을 상태 함수에 담아 FilterableTable에 전달
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInStockOnlyChange(e.target.checked);
  }

  return (
    <form>
      <input type="text" value={filterText} placeholder="Search..." onChange={handleTextChange} />
      <label>
        <input type="checkbox" checked={inStockOnly} onChange={handleCheckboxChange}/>
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
