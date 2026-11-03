//* typeof

let x = 2142;
console.log(typeof x);


//* type guard

const print = (value: string | number) => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else {
        return value
    }
}


//* truthiness

type User = {
    name: string,
    address?: {
        city: string
    }
} | null

const LoggedInUser: User = {
    name: 'abcd',
    address: {
        city: 'rangpur'
    }
}

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.city);

        return
    }

    throw new Error('User not found!')
}


//* some caveat of type guard

// const printAll = (x: string | string[] | null)=>{
//     if (x && typeof x === 'object') {
//         for (let str of x) {
//             console.log(str);
//         }
//     } else if (typeof x === 'string') {
//         console.log(x);
//     } else {
//         console.log('');
//     }
// }

// printAll('abc')



//* equality

const compare = (x: number | string, y: number | boolean) => {
    if (x === y) {
        console.log(x, y);
    }
}

const printAll = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x === 'object') {
            for (let str of x) {
                console.log(str);
            }
            return
        }
        return console.log(x);
    }
    console.log('');
}

printAll('acv')



//* "in" operator

type Fish = { swim: () => void }
type Bird = { fly: () => void }

const move = (animal: Bird | Fish) => {
    if ('fly' in animal) {
        animal.fly()
        return
    }
    return animal.swim()
}



//* instanceof check

// const date = new Date()
// const err = new Error('Something went wrong!')

// console.log(date instanceof Date);
// console.log(err instanceof Error);

const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return
    }
    const date = new Date(x)
    console.log(date.toISOString());
}

showDate("12-12-2000")




//* discriminated union

interface Circle {
    kind: 'circle',
    radius: number
}

interface Square {
    kind: 'square',
    sideLength: number
}

const getArea = (shape: Circle | Square) => {
    if (shape.kind === 'circle') {
        console.log(shape.radius);
    } else {
        console.log(shape.sideLength);
    }
}




