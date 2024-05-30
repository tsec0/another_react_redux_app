import { useAddNewProductMutation } from "../redux-store/service/dummyData";

const AddNewProduct = () => {
    const [AddNewProduct, {data, error, isLoading}] = useAddNewProductMutation();
    
    if(error){
        return (
            <>
                <h1>Something went wrong. Try again later.</h1>
                <p>{error.message}</p>
            </>
        )
    }

    if(isLoading){
        return (
            <h1>Loading....</h1>
        )
    }

    const handleAddProduct = async () => {
        try {
            const newProductData = {
                id: 1,
                title: "T-shirt GUCCI",
                description: "This is one of the most amazing and the best quality T-shirts on the market right now!"
            };

            await AddNewProduct(newProductData);

        } catch (err) {
            alert(err);
        }
    }

    return (
        <>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <button onClick={handleAddProduct} disabled={isLoading}>
            AddNewProduct
        </button>
        </>
    )
}

export default AddNewProduct;