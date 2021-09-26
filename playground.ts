


export default async function play() {

    type Greeting = { message: string }

    type InferHelloProps<T> = T extends () => Promise<{props: infer Props}>
     ? Props 
     : never

    const getHelloProps = async function() {
        const greeting: Greeting = { message: "Hi Friends!"}
    

        return{
            props: {
                greeting,
                data: {
                    cars: ["car1", "car2"]
                }
            }
        }
    } 
    
    function sayHello(props: InferHelloProps<typeof getHelloProps>) {
        console.log(props.greeting)
        // this isnt working???  AH because i needed to put async into the getHelloProps
    }

    const data = await getHelloProps()
    sayHello(data.props)

    // good tool to use - debugger - go into console localhost3000 and refresh and in the 
    // developers console will show up the debugger 
    // const data = await getHelloProps()
    // debugger
}



