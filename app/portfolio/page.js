import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="w-auto ">
                <Navbar />
                <div className='bg-white'>
                    <Hero />
                </div>
            </main>
        </div>
    )
}

export default Home