// literal type

type Status = 'pending';
const status: Status = 'pending';


// basic union

type Identity = string | number;
const id: Identity = 12324

// literal union

type Role = 'user' | 'admin' | 'manager';
const role: Role = 'admin';

// union object 

type Admin = { id: number, role: 'admin', privileges: string[] };
type Member = { id: number, role: 'member', plans: string[] };
type User = Admin | Member

const user: User = { id: 234, role: "member", plans: ['fad'] }
console.log(user);



//* type alias vs interface

//? interface is generally connected to objects
//? type alias more connected to literals, unions, tuples, primitives

type Id = number;
//! interface Id = number

type Color = 'white'| 'black'
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

interface Cat extends Animal{
    breed: string
}

const cat: Cat ={
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