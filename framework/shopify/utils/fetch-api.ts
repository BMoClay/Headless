type FetchParams = {
    query: string
} // this is just a more clear way than putting this logic in the fetchApi params async ({ query }: {query: string})

const fetchApi = async ({query}: FetchParams) => {
    const url = "http://localhost:4000/graphql"
    // dont need to use axios or anything can use fetch
    const res = await fetch(url, {
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