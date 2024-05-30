
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }), // some api url for json data
    endpoints: (builder) => ({
        // Get All Products (Reading the data)
        getAllProducts: builder.query({
            query: () => "/products", // specific endpoint => specific hook
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`
        }),

        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/products/add`, // api refferance to add a product
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: newProduct,

            })
        }),

        updateProduct: builder.mutation({
            query: ({ id, updatedProduct }) => ({
                url: `/products/${id}`,
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: updatedProduct,

            })
        }),
        
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",

            })
        })

    }),
});

// RTK Query behind the scene
// `use${UpdateProduct}Mutation`
// `use${GetAllProducts}Query`

export const { 
    // Auto-Generated
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useAddNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;
