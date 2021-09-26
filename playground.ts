
interface Person {
    name: string
}

// do something to get specific type from a return function
// right now because T extends () that means it extends an empty function/ takes no parameters
// type ReturnType<T> = T extends () => string ? string : number
// this ternary is saying if the the T function comes in w no parameters then 
// we are assigning a number to the return type
// otherwise we are assigning the return type to be a string


// now we would like to get any function that we pass to T its return type
// how can i do it
// instead of writing here a string write Return  -   Will throw error
// its looking in the ReturnType<T *looking here> for an Return
// so use infer
type ReturnType<T> = T extends () => infer Return ? Return : number


// remember always replace the types w the generic types

export default function play() {

  function logger() {
      // now we could change from "hello World" to a different type such as true (boolean)
      return true     
      // return "hello World"
  }
  
  const loggerReturn: ReturnType<typeof logger> = true
//   const loggerReturn: ReturnType<typeof logger> = 100
  // lets break it down. <typeof logger> takes in a parameter thats a string
  // so when it gets a 2 it doesnt like that? yes
} 




 