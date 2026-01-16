'use client'
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import EnrolledCourses from './_components/EnrolledCourses'
import EmploreMore from './_components/EmploreMore'
import InvitedFriends from './_components/InvitedFriends'
import UserStatus from './_components/UserStatus'
import UpgradeToPro from './_components/UpgradeToPro'

function Dashboard() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='p-10 md:px-20 lg:px-32 xl:px-48'>
      <div className='grid grid-cols-3 gap-7'>
        <div className='col-span-2'>
          <WelcomeBanner/>
          <EnrolledCourses/>
          <EmploreMore/>
          <InvitedFriends/>
        </div>
        <div>
          <UserStatus/>
          <UpgradeToPro/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
