import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='p-5 bg-blue-500'>
            <Link href='/' className='px-2 py-1 bg-white text-blue-500 rounded-lg'>Home</Link>
            <Link href='/todos' className='ml-2 px-2 py-1 bg-white text-blue-500 rounded-lg'>Todo</Link>
            <Link href='/search' className='ml-2 px-2 py-1 bg-white text-blue-500 rounded-lg'>Search</Link>
        </header>
    )
}
