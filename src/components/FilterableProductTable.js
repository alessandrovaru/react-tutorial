import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import React, { useState } from "react";

const FilterableProductTable = ({ products }) => {
  const [filterText, inStockOnly] = useState({
    filterText: "",
    inStockOnly: false,
  });
  console.log([filterText, inStockOnly]);
  return (
    <div className="filter-container">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
