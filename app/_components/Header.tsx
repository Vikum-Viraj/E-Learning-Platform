"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { useClerk, UserButton } from '@clerk/nextjs'

const courses = [
    {
        id: 1,
        name: 'HTML',
        desc: 'Learn the fundamentals of HTML and build the structure of modern web pages.',
        path: '/course/1/detail'
    },
    {
        id: 2,
        name: 'CSS',
        desc: 'Master CSS to style and design responsive, visually appealing web layouts.',
        path: '/course/2/detail'
    },
    {
        id: 3,
        name: 'React',
        desc: 'Build dynamic and interactive web applications using the React JavaScript library.',
        path: '/course/3/detail'
    },
    {
        id: 4,
        name: 'JavaScript',
        desc: 'Master JavaScript fundamentals and advanced concepts for modern web development.',
        path: '/course/4/detail'
    },
    {
        id: 5,
        name: 'Node.js',
        desc: 'Build scalable server-side applications and APIs with Node.js and Express.',
        path: '/course/5/detail'
    }
]

function Header() {

    const { user } = useClerk()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className='p-4 max-w-7xl flex justify-between items-center w-full'>
                <div className='flex gap-2 items-center'>
                    <Image src={'/crown.png'} alt='logo' width={40} height={40} />
                    <h2 className='font-bold text-3xl font-game'>CodeBox</h2>
                </div>
                <div className='h-9 w-32 bg-transparent' />
            </div>
        )
    }

    return (
        <div className='p-4 max-w-7xl flex justify-between items-center w-full'>
            <div className='flex gap-2 items-center'>
                <Image src={'/crown.png'} alt='logo' width={40} height={40} />
                <h2 className='font-bold text-3xl font-game'>CodeBox</h2>
            </div>
            {/* Navbar */}
            <NavigationMenu>
                <NavigationMenuList className='gap-8'>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]'>
                                {courses.map((course, index) => (
                                    <div key={index} className='p-2 hover:bg-accent rounded-xl cursor-pointer'>
                                        <h2 className='font-medium'>{course.name}</h2>
                                        <p className='text-xs'>{course.desc}</p>
                                    </div>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href={'/projects'}>
                                Projects
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href={'/pricing'}>
                                Pricing
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href={'/contact'}>
                                Contact us
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {!user ? <Link href={'/sign-in'}>
                <Button className='font-game text-2xl' variant={'pixel'}>Sign Up</Button>
            </Link>
                : <div className='flex gap-2 items-center'>
                    <Button className='font-game text-2xl' variant={'pixel'}>Dashboard</Button>
                    <UserButton />
                </div>
            }
        </div>
    )
}

export default Header
