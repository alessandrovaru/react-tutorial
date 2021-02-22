
const ProductCategoryRow = ({ id, productCategory }) => {
    return (
        <>
            <tr key={id}>
                <td className='category'>{productCategory}</td>
            </tr>
        </>
    )
}

export default ProductCategoryRow
