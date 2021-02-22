
const ProductRow = ({ id, productName, productPrice }) => {
    return (
        <>
            <tr key = {id}>
                <td>{productName}</td>
                <td>{productPrice}</td>
            </tr>
        </>
    )
}

export default ProductRow
