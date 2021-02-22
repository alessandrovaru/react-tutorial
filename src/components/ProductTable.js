import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
    
    let lastCategory = null
    let rows = []

    products.map((product) => {
        if (product.category !== lastCategory ) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
        }
        rows.push(<ProductRow product={product} key={product.name} />)

       return lastCategory = product.category         
    })
    
    return (
        <div className='product-table'>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>    
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable
