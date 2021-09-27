type FetcherParams = {
    query: string
} // this is just a more clear way than putting this logic in the fetchApi params async ({ query }: {query: string})

type FetcherResult<T> = { data: T }

const fetchApi = async <T>({
    query }: FetcherParams
): Promise<FetcherResult<T>> => {
    const url = "http://localhost:4000/graphql" 
    const res = await fetch(url, {   // dont need to use axios or anything can use plain fetch
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            query
        })
    })

    const { data, errors } = await res.json()
    // ?? is checking if first left hand expression is null or undefined -> if it is undefined go w expression on right side
    // || is checking if left hand expression is null, undefined, "", 0, or false
    if (errors) {
        throw new Error(errors[0].message ?? errors.message)
    }

    return { data }
}

export default fetchApi