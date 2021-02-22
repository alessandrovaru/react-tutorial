import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
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
                    {products.map((product) => (
                        <ProductCategoryRow id={product.id} productCategory={product.category} />
                    ))}
                    {products.map((product)=>(
                        <ProductRow id={product.id} productName={product.name} productPrice={product.price} />
                    ))}
                    
                    
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable
