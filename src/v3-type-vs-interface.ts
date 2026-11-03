//* type alias vs interface

//? interface is generally connected to objects
//? type alias more connected to literals, unions, tuples, primitives

type Id = number;
//! interface Id = number

type Color = 'white' | 'black'
//! interface Color 'white' | 'black'

interface User1 {
    name: string,
    id: number,
    role: 'admin' | 'user'
}

const user1: User1 = {
    name: 'mir',
    id: 23,
    role: 'user'
}


//TODO: interface

interface Animal {
    species: string
}

interface Cat extends Animal {
    breed: string
}

const cat: Cat = {
    species: 'Felix Catus',
    breed: 'Persian'
}
console.log(cat);


type Vehicle = {
    brand: string
}

type Car = Vehicle & {
    model: string
}

const car: Car = {
    model: 'Corolla',
    brand: 'Toyota'
}

console.log(car);



//* valid
interface IEmployee {
    name: string
}
interface IEmployee {
    id: number
}

//! this is not valid
// type TEmployee = {
//     name: string
// }
// type TEmployee = {
//     id: number
// }

const employee: IEmployee = {
    name: 'hasan',
    id: 324
}