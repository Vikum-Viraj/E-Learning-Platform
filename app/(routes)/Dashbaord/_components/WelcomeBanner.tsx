'use client'
import { useClerk } from '@clerk/nextjs';
import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
    const { user } = useClerk();
    return (
        <div className='flex gap-3 flex-center'>
            <Image src={'/machine.webp'} alt="Clover Logo" width={120} height={120} />
            <h2 className='font-game text-2xl p-2 border
             bg-zinc-800 rounded-lg rounded-bl-none'>
                Welcome, 
                <span className='text-yellow-300'>
                    {user?.firstName} {user?.lastName}
                </span> Let's Learn Something new
             </h2>
        </div>
    )
}

export default WelcomeBanner
