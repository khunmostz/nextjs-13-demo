import React, { Suspense } from 'react'
import TodosList from './todos/TodosList'

function Home() {
    return (
        <div className='flex flex-col space-y-10'>
            <Suspense fallback={<p className='text-red-500'>Loading the Todos...</p>}>
                <h1>Loading Todos</h1>
                <div className='flex space-x-2'>
                    {/* @ts-ignore */}
                    <TodosList />
                </div>
            </Suspense>
            <Suspense fallback={<p className='text-red-500'>Loadin Shopping Trolley...</p>}>
                <h1>Loadin Shopping Trolley</h1>
                <div className='flex space-x-2'>
                    {/* @ts-ignore */}
                    <TodosList />
                </div>
            </Suspense>
        </div>
    )
}

export default Home