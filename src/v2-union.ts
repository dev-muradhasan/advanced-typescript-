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



