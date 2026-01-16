import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UpgradeToPro() {
    return (
        <div className='flex items-center flex-col p-5 border-4 rounded-xl mt-5'>
            <Image src={'/logo.png'} alt='logo' width={70} height={70} />
            <h2 className='text-3xl font-game'>Upgrade to Pro</h2>
            <p className='font-game text-gray-500 text-xl text-center'>Unlock Premium Feature to super Charge your learning</p>
            <Link href={'/pricing'}>
                <Button size={'lg'} className='font-game bg-yellow-400 text-gray-900' variant={'pixel'}>Upgrade Now</Button>
            </Link>
        </div>
    )
}

export default UpgradeToPro
