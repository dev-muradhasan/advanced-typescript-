//* generic type 

const wrapInArray = <T>(value: T) => {
    return [value]
}

const stringArr = wrapInArray<string>('abc')
const numberArr = wrapInArray<number>(123)

stringArr.map(item => item.toUpperCase())


interface Users {
    name: string,
    role: string
}

interface Blog {
    title: string,
    description: string,
    date: string
}

interface ApiResponse<T> {
    data: T,
    success: boolean,
    statusCode: number,
}


type UserResponse = ApiResponse<Users>
type blogResponse = ApiResponse<Blog>

// const userRes: ApiResponse<Users> = {}
// const userRes: ApiResponse<any/unknown> = {}
const userRes: UserResponse = {
    success: true,
    statusCode: 200,
    data: {
        name: 'abc',
        role: 'user',
    }
}