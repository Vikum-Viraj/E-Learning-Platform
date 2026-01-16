'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'

const EnrolledCourses = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    return (
        <div className='mt-8'>
            <h2 className='font-game text-3xl mb-5'>Your Enrolled Courses</h2>
            {enrolledCourses?.length == 0 ?
                <div className='flex flex-col text-current gap-3 p-4 border rounded-2xl bg-zinc-800 items-center'>
                    <Image src={'/books.png'} alt='book'
                        width={90}
                        height={90} />

                    <h2>You Don't have any enrolled courses</h2>
                    <Button variant={'pixel'} className='font-game' size={'lg'}> Browser All Courses</Button>
                </div>
                : <div>
                    List
                </div>
            }
        </div>
    )
}

export default EnrolledCourses