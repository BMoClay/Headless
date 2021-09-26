import { useEffect } from "react"
import play from "../playground"


export default function Home() {

  useEffect(() =>{
    play();
  }, [])  


  return (
    <div>
      Hello World!!
    </div>
  )
}


// export default function Home() {

//   //typescript tests and examples: its for declaring types!
//   const message: string = "Hello World!"
//   // let age: number = 30

//   let a: AddEventListenerOptions;
//   // the 'Process' below is from node_modules/next/types/global.d.ts line 4
//   // it defines if u have a variable w type of process then u can access
//   // the property with the type of browser
//   let b: NodeJS.Process
//   console.log(b.browser)

//   let person: Person = {
//     name: 'asdf'
//   }

//   return (
//     <div>
//       {message}
//     </div>
//   )
// }
