
interface Person {
    name: string
}


// type CustomArray = { 
//     [index: number]: string
// }

// type CustomArray<T = any> = {  // could also be default value like string <T = string>
//     [index: number]: T
// }

//could also do the above functionality in the export below by not defining the T default
// value above, but rather below in the function line 24

type CustomArray<T> = {
    [index: number]: T
}

export default function play() {

    const items: CustomArray<string> = ["1","2","3"]
    const items2: CustomArray<number> = [1,2,3]
    // const items: CustomArray = ["1","2","3"]

    //type Single = CustomArray[number]
    // accessing type CustomArray information from line 7,8

    //if you want to make generic arrays look to line 11,12 <T>

} 




 