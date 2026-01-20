"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import CourseDetailBanner from './_components/CourseDetailBanner'
import axios from 'axios';
import { Course } from '../_components/CourseList';
import CourseChapters from './_components/CourseChapters';
import CourseStatus from './_components/CourseStatus';
import CommunityHelpers from './_components/CommunityHelpers';
import UpgradeToPro from '../../Dashbaord/_components/UpgradeToPro';
import CommunityHelpSection from './_components/CommunityHelpSection';

function CourseDetail() {
  const { courseId } = useParams();
  const [courseDetail, setCourseDetail] = React.useState<Course[]>();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    GetCourseDetail();
  },[courseId])

  const GetCourseDetail = async () => {
    setLoading(true);
    const result = await axios.get(`/api/course?courseId=${courseId}`);
    console.log(result);
    setCourseDetail(result?.data);
    setLoading(false);
  }
  return (
    <div>
        <CourseDetailBanner loading={loading} courseDetail={courseDetail} />
        <div className='flex justify-between'>
          <div className='col-span-3'>
             <CourseChapters loading={loading} courseDetail={courseDetail} />
          </div>
          <div>
            <CourseStatus courseDetail={courseDetail} />
            <UpgradeToPro/>
            <CommunityHelpSection/>
          </div>
        </div>
    </div>
  )
}

export default CourseDetail