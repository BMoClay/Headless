

interface Person {
    name: string;
    age: number
}

interface BusinessPerson extends Person {
    salary: number
}

interface AcademicPerson extends Person {
    publications: string[]
}

export default function play() {
    const person: AcademicPerson = {
        name: "Filip",
        age: 33,
        publications: ["this one"]
    }
    const person2: BusinessPerson = {
        name: "Filip",
        age: 33,
        salary: 33
    }

    function logPerson(person: Person) {}

    logPerson(person2)
}


