
const ProductRow = ({ product }) => {
    const name = product.stocked ? //if in the next line
    product.name : //else in the next line
        <span style={{color: 'red'}}>
            {product.name}
        </span>
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        </>
    )
}

export default ProductRow
