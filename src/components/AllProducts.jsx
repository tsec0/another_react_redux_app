import { useGetAllProductsQuery } from "../redux-store/service/dummyData";

const AllProducts = () => {
    // destructure needed data
    const { data, isError, isLoading} = useGetAllProductsQuery();

    if(isError){
        return <h1>
            Something got wrong. Please try again later.
        </h1>
    }

    if(isLoading){
        return <h1>
            Loading...
        </h1>
    }



    return (
    <>
        <div>
            {data?.products.map((product) => (
                <>
                    <h1 key={product.id}>{product.title}</h1>
                    <p>{product.description}</p>
                </>
            ))}
        </div>
    </>
    )
}

export default AllProducts;