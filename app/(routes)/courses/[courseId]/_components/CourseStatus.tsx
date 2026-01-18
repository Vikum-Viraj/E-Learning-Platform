import Image from 'next/image'
import React from 'react'

function CourseStatus() {
  return (
    <div className='font-game p-4 border-4 rounded-xl w-full'>
      <h2 className='text-3xl'>Course Progress</h2>
      <div>
        <Image src={'/book.png'} alt='book' width={40} height={40} />
      </div>
    </div>
  )
}

export default CourseStatus