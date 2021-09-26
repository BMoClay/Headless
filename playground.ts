

interface Person {
    name: string,
    age: number
}

export default function play() {
    const name: string = "Filip"
    const age = 30

    const person: Person = {
        name:"Biell",
        age: 33
    }

    function logPersonInfo(personName: string, personAge: number) {
        // const info = "Name: " + personName + ", age:" + personAge
        // this could be written easier using interpolation:
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info)
        return info
    }

    function logPersonInfo2(person: Person) {
        // const info = "Name: " + personName + ", age:" + personAge
        // this could be written easier using interpolation:
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info)
        return info
    }

    logPersonInfo(name, age)
    logPersonInfo2(person)
   
}



// ************************ Earlier Code ******************** //
// // TS recommends using Interface over Types (but there is a very special place for Types)


// // interfaces describe a data structure in a more natural way
// // Describing objects:
// interface Person {
//     name: string,
//     age: number
// }
// // Shipment, Orders, etc would be good choices to describe w Interface


// // type aliases
// // to describe function types (to describe data functions)
// // type Person = {
// //     name: string,
// //     age: number
// // }

// type Data = string

// export default function play() {
//     const name: Data = "Filip"
//     const age = 30
//     // could also write the types here but dont need to 
//     // const name: string = "Filip"
//     // const age: number = 30
//     // some people do this for readability

//     const person: Person = {
//         name:"Biell",
//         age: 33
//     }

//     function logPersonInfo(personName: string, personAge: number) {
//         // const info = "Name: " + personName + ", age:" + personAge
//         // this could be written easier using interpolation:
//         const info = `Name: ${personName}, age: ${personAge}`
//         console.log(info)
//         return info
//     }

//     function logPersonInfo2(person: Person) {
//         // const info = "Name: " + personName + ", age:" + personAge
//         // this could be written easier using interpolation:
//         const info = `Name: ${person.name}, age: ${person.age}`
//         console.log(info)
//         return info
//     }

//     logPersonInfo(name, age)
//     logPersonInfo2(person)
//     // the below logPersonInfo invocations were tests re: type
//     // before we specified the personName/Age type... 
//     // the default type was 'any'. Now its string & number
//     // logPersonInfo(true, false)
//     // logPersonInfo(12, 12)
// }