
//* promise 

interface Users {
    name: string,
    role: string
}

interface ApiResponse<T> {
    data: T,
    success: boolean,
    statusCode: number,
    message: string
}

const fetchUser = async (): Promise<Users | undefined> => {
    try {
        const res = await fetch('/api/v1/some-endpoint')
        const data = (await res.json()) as ApiResponse<Users>

        if (!res.ok || !data.success) {
            throw new Error(`Failed to fetch user data: ${data.message}`)
        }

        return data.data
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        } else {
            console.error('Something went wrong!');
        }
    }
}

const userData = await fetchUser()
if(userData){
    userData.name
}