
import fetchApi from "../utils/fetch-api" // he is saying getAllProductQuery (singular product as opposed to plural products, but I think  // that he is wrong so I put it in as plural as it is defined in get-all-products.ts)
import getAllProductsQuery from "../utils/queries/get-all-products"
import { normalizeProduct } from "../utils/normalize"
import { ProductConnection } from "../schema"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
    const { data } = await fetchApi<ReturnType>({query: getAllProductsQuery}) // need to normalize and return new data here!

    const products = data.products.edges.map(({ node: product }) => 
        normalizeProduct(product)
    ) ?? []
 
    return products
}

export default getAllProducts