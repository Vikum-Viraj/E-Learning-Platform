import React from 'react'
import { Course } from '../../_components/CourseList';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Props = {
    loading: boolean;
    courseDetail: Course[] | undefined;
}

const CourseDetailBanner = ({loading, courseDetail}: Props) => {
  return (
    <div>
        {!courseDetail ?
            <Skeleton className='w-full h-[300px] rounded-2xl' />
            : <div className='relative'>
                <Image src={courseDetail?.bannerImage}
                    alt={courseDetail?.title}
                    width={1400}
                    height={300}
                    className='w-full h-[350px] object-cover'
                />
                <div className='font-game absolute top-0 pt-20 p-10 md:px-24 lg:px-36 from-black/80 to-white-50/50'>
                    <h2 className='text-6xl'>{courseDetail?.title}</h2>
                    <p className='text-3xl text-gray-300 mt-3'>{courseDetail?.desc}</p>
                    <Button className='text-2xl mt-7' variant={'pixel'}>Enroll Now</Button>
                </div>
            </div>
        }
    </div>
  )
}

export default CourseDetailBanner