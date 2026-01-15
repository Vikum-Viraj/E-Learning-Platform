"use client"
import React, { useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useClerk } from '@clerk/nextjs'
import axios from 'axios'
import { UserDetailContext } from '@/context/UserDetailContext'
import { set } from 'date-fns'

function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

  const { user } = useClerk();
  const [userDetail, setUserDetail] = useState(undefined);

  React.useEffect(() => {
    user && CreateNewUser();
  }, [user])

  const CreateNewUser = async () => {
    const result = await axios.post('/api/user', {});
    setUserDetail(result?.data);
  }
  return (

    <NextThemesProvider {...props}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider >

  )
}

export default Provider