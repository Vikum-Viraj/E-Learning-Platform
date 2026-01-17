"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'

type Course = {
    id: number,
    courseId: number,
    name: string,
    desc: string,
    level: string,
    bannerImage: string,
    tag: string
}

const CoursesList = [
    {
        id: 1,
        name: 'React Beginner',
        desc: 'Learn the fundamentals of React, including components, props, state, and building your first UI.',
        bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/588a44195922117.66168b374ece8.gif',
        level: 'Beginner',
    },
    {
        id: 2,
        name: 'HTML Beginner',
        desc: 'Understand the basics of web structure using HTML tags, elements, and semantic layouts.',
        bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/original-ba977c3d2765b44fd9d1579d78d4.gif?updatedAt=1763406224974',
        level: 'Beginner',
    },
    {
        id: 3,
        name: 'CSS Beginner',
        desc: 'Master styling essentials like selectors, colors, layout, flexbox, and responsive design.',
        bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/fd40a4b8b151c4e43210657c187d03c9.gif?updatedAt=1763406225765',
        level: 'Beginner',
    },
    {
        id: 4,
        name: 'Python Beginner',
        desc: 'Start coding with Python by learning variables, conditions, loops, functions, and basic projects.',
        bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/tumblr_3ebef054c877d03c507aa8c40149908b_515b1f22_1280.webp?updatedAt=1763406230994',
        level: 'Beginner',
    },
];

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
        setCourseList(result?.data.length > 0 ? result?.data : CoursesList);
        setLoading(false);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-3'>
            {courseList?.map((course, index) => (
                <div key={index} className='border-4 hover:bg-zinc-400 cursor-pointer'>
                    <Image src={(course?.bannerImage).trimEnd()} width={400} height={200}
                        alt={course?.name}
                        className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='p-4'>
                        <h2 className='font-game text-2xl'>{course?.name}</h2>
                        <p className='font-game text-xl text-gray-400 line-clamp-2'>{course?.desc}</p>
                        <h2 className='bg-zinc-800 flex px-4 mt-3 gap-2 font-game p-2 rounded-2xl items-center inline-flex'>
                            <ChartNoAxesColumnIncreasing className='h-4 w-4' />
                            {course.level}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CourseList
