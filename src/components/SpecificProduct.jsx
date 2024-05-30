import { useGetProductByIdQuery } from "../redux-store/service/dummyData";

const SpecificProduct = () => {

    const { data, isError, isLoading } = useGetProductByIdQuery(6); // the id of a product is passed
    
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
    <div>{data?.brand}</div>
    <div>{data?.category}</div>
    <div>{data?.description}</div>
    </>
  )
}

export default SpecificProduct;

