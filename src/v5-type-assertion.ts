//* type assertion
//* 'as' syntax

type Status = 'pending' | 'success' | 'reject' 

const someStatus: string = 'pending'

const showStatus = (status: Status) =>{
    console.log('your current application status is ' + status );
}

showStatus(someStatus as Status)



//*  non null assertion

interface Config {
    port?: number
}

const config: Config = {
    port: 5000
}

const currentPort: number = config.port!
// const currentPort: number = config.port as number



//* constant assertion

const configuration = {
    port: 8000,
    prefix: '/api/v1'
} as const

// configuration.port = 500;