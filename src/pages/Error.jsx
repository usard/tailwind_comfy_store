import React from 'react'
import {Link, useRouteError} from 'react-router-dom'

const Error = () => {
    const error = useRouteError;
    console.log('error from error page :', error);
    // if(error.status){
        return (
            <main className='grid min-h-[100vh] place-items-center'>
                <div className='text-center'>
                    <h1 className='text-9xl font-bold'>404</h1>
                    <p className='mt-2 text-2xl font-semibold'>page your are looking for is not found</p>
                    <Link to='/' className='mt-4 btn btn-secondary'>Back Home</Link>
                </div>
            </main>
        )
    // }
    // return (
    //     <main className='grid min-h-[100vh] place-items-center'>
    //         <div>
    //             <p className='text-bold'>there was an error</p>
    //         </div>
    //     </main>
    // )
}

export default Error;