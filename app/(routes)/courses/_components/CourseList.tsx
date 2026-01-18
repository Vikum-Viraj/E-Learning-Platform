"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import Link from 'next/link'

export type Course = {
    id: number,
    courseId: number,
    title: string,
    desc: string,
    level: string,
    bannerImage: string,
    tag: string,
    chapters?: Chapter
}

type Chapter={
    chapterId:number,
    courseId:number,
    desc:string,
    name:string,
    id:number,
    exercises:exercise[]
}

type exercise={
    name:string,
    slug:string,
    xp:number,
    difficulty:string
}

function CourseList() {

    const [courseList, setCourseList] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        GetAllCourses();
    }, [])

    const GetAllCourses = async () => {
        setLoading(true);
        const result = await axios.get('/api/course');
        console.log(result);
        setCourseList(result?.data.length > 0 ? result?.data : []);
        setLoading(false);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-3'>
            {courseList?.map((course, index) => (
                <Link key={index} href={`/courses/${course?.courseId}`}>
                    <div className='border-4 hover:bg-zinc-400 cursor-pointer'>
                        <Image src={(course?.bannerImage).trimEnd()} width={400} height={200}
                            alt={course?.title}
                            className='w-full h-[200px] object-cover rounded-t-lg'
                        />
                        <div className='p-4'>
                            <h2 className='font-game text-2xl'>{course?.title}</h2>
                            <p className='font-game text-xl text-gray-400 line-clamp-2'>{course?.desc}</p>
                            <h2 className='bg-zinc-800 flex px-4 mt-3 gap-2 font-game p-2 rounded-2xl items-center inline-flex'>
                                <ChartNoAxesColumnIncreasing className='h-4 w-4' />
                                {course.level}
                            </h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CourseList
