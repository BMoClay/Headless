// he is saying getAllProductQuery (singular product as opposed to plural products, but I think
// that he is wrong so I put it in as plural as it is defined in get-all-products.ts)
import fetchApi from "../utils/fetch-api"
import getAllProductsQuery from "../utils/queries/get-all-products"

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi({query: getAllProductsQuery})
    return products.data
}

export default getAllProducts