
const SearchBar = () => {
    return (
        <div className="search-container">
            <input className="search-bar" type="text" placeholder="Search.."></input>
            <br/>
            <input className="filter-check" type="checkbox" name="stock_available" id="stock_available" /><span>Mostrar productos con stock</span>
        </div>
    )
}

export default SearchBar
