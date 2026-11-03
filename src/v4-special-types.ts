//* top types

let helloWorld: any = 'hello world'
helloWorld = 2345;
helloWorld.length

let something: unknown = 'hi'
// something.length


//* core types

let something2: unknown = 'abc'

const num: number = 2314
const str: string = 'abcd'

something2 = num

type Status = 'pending' | 'success'
let someStatus: string;

let status: Status = 'pending'
someStatus=status


//* nullish type

interface User {
    name: string
}

type LoggedInUser = User | null

const currentUser: LoggedInUser = null



//* unit type (void)

const greetings = () => {
    console.log('hi');
}
greetings()
something2 = greetings()

//* sub type of unit type

const anotherGreet = (): undefined => {
    console.log('hi');
}
const greeting: void = anotherGreet()


//* bottom type

const getError = (msg: string): never => {
    throw new Error(msg)
}

const x: number | string | null = getError("msg")