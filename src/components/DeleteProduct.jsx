import { useDeleteProductMutation } from '../redux-store/service/dummyData'
import PropTypes from 'prop-types';

const DeleteProduct = ({ productId }) => {

    DeleteProduct.propTypes = {
        productId: PropTypes.number,
    }

    const [ deleteProduct, { data, error, isLoading } ] = 
        useDeleteProductMutation();
    
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

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(productId);
        } catch (err){
            console.log("Error deleting product: ", err);
        }
    }
    
    return (
        <>
        <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
            <button onClick={handleDeleteProduct}>DeleteProduct</button>
        </>
    )
};

export default DeleteProduct;
