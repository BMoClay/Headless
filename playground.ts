
interface Person {
    name: string
    age: number
    grades: number[]
}

// type Logger = (param1: string, param2: number) => string
// now w multiple generic types

// type Logger<T, E, R> = (param1: T, param2: E) => R
// could also be more specific - FP for first parameter, SP for second etc
type Logger<
        FP = string,
        SP = number,
        RT = string
        > = (param1: FP, param2: SP) => RT

export default function play() {

    // const superLogger: Logger = (name: string, age: number) => {
    const superLogger: Logger< string, number, string> = (name, age) => {
        return "hello Wororld"
    }

    const logger: Logger = (brand, age) => {
        return brand + age
    }

} 




 