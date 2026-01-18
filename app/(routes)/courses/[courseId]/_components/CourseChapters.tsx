import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type Props = {
  loading: boolean;
  courseDetail: any;
}

const CourseChapters = ({loading, courseDetail}: Props) => {
  return (
    <div>
      {courseDetail?.chapters?.length == 0 ?
        <div>
          <Skeleton className='w-full h-[100px]' />
          <Skeleton className='w-full h-[100px]' />
        </div>
      :
      <div className='p-10 border-4 rounded-2xl'>
        {courseDetail?.chapters?.map((chapter,index)=>(
          <Accordion type="single" collapsible key={index} className='mt-3'>
            <AccordionItem value="item-1">
              <AccordionTrigger className='p-3 hover:bg-zinc-800 font-game text-4xl'>
                <div className='flex gap-10'>
                  <h2 className='h-12 w-12 bg-zinc-800 rounded-full text-center flex items-center justify-center'>{index + 1}</h2>
                  <h2>{chapter?.name}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='p-7 bg-zinc-900 rounded-xl'>
                  {chapter?.exercises.map((exc, index) => (
                    <div key={index} className='flex items-center justify-between'>
                      <div className='flex items-center gap-10 font-game mt-3'>
                        <h2 className='text-3xl'>Excercise {index + 1}</h2>
                        <h2 className='text-3xl'>{exc?.name}</h2>
                      </div>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant={'pixelDisabled'}>???</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='font-game text-2xl'>Please Enroll first</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      }
    </div>
  )
}

export default CourseChapters