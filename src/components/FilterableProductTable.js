import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from 'react'


const FilterableProductTable = ({ products }) => {
    const estado = useState([{filterText: '', inStockOnly: false}])
    return (
        <div className="filter-container">
            <SearchBar />
            <ProductTable products={products} estado={estado} />
        </div>
    )
}

export default FilterableProductTable
