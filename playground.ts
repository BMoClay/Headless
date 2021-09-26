
interface Person {
    name: string
}


export default function play() {

  function logger(...args: any[]) {
      return "hello World"
  }
  // implicity logger is a type of string u can check by hovering over
  
  const kindaLogger: typeof logger = (name: string, age: number) => "Hi Guys"

  const person = {
      name: "filip",
      age: 33
  }
  // now below the person2 will get the basic structure from person defined above
  const person2: typeof person = {
      name: "jon",
      age: 35
  }

  kindaLogger("", 20)
} 




 