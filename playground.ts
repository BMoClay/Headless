
interface Person {
    name: string
}

type CustomArray<T> = {
    [index: number]: T
}

// ["apples", "oranges"][1]
// this would return oranges because its at the index of 1

// type CustomObject = {
//     // [index: string]: string
//     // could also be [key: string]: string
//     // can be whatever you like
//     // or could be 
//     [key: string]: string | number | Person
// }

// or if you would like to make a generic from it (from CustomObject)
type CustomObject<T = any> = {
    [key: string]: T
}

// then this will throw an error below w CustomObject invocation so neet to adjust custom
// object CustomObject to have a default value

export default function play() {

   const person: CustomObject = {
       "age": 23,
       "name": "Ben",
       person: {
           name: "Filip"
       }
   }
  
} 




 