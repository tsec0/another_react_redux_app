import { useUpdateProductMutation } from "../redux-store/service/dummyData";
import PropTypes from 'prop-types';

UpdateProduct.propTypes = {
    productId: PropTypes.number,
}

const UpdateProduct = ({ productId }) => {
    
    const [ updateProduct, { data, error, isLoading} ] = 
        useUpdateProductMutation();

    if(error){
        return (<>
        <h1>
            Something got wrong. Please try again later.
        </h1>
        <p>
            {error.message}
        </p>
        </>
    )}

    if(isLoading){
        return (
        <h1>
            Loading...
        </h1>
    )}

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title: "Title updated",   
            };

            await updateProduct({
                id: productId,
                updatedProduct: updatedProductData,
            })

        } catch(err){
            console.log("Error updating product:", err);
        }
    }

    return (
        <>
        <h1>{data?.title}</h1>
        <button 
            onClick={handleUpdateProduct} 
            disabled={isLoading}>
                UpdateProduct
        </button>
        </>
    )
}

export default UpdateProduct;