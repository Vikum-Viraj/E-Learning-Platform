import Image from 'next/image'
import React from 'react'
import CoursesList from '../courses/_components/CourseList'

function Courses() {
    return (
        <div className='w-full'>
            <div className='relative w-screen'>
                <Image src={'/course-banner.gif'} alt='course-banner'
                    width={2000}
                    height={300}
                    className='w-full h-[300px] object-cover'
                />
                <div className='absolute top-0 h-full pt-24 px-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to-white-50/50'>
                    <h2 className='font-game text-6xl'>Explore All Courses</h2>
                    <p className='font-game text-2xl'>Explore all courses and start learning</p>
                </div>
            </div>
            <div className='mt-8 px-10 md:px-24 lg:px-36'>
                <h2 className='font-game text-5xl'>All Courses</h2>
                <CoursesList />
            </div>
        </div>
    )
}

export default Courses
