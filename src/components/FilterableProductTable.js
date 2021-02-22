import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


const FilterableProductTable = ({ products }) => {
    
    return (
        <div className="filter-container">
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )
}

export default FilterableProductTable
