"use client";
import React, { ReactNode, useState } from 'react'
import { UserInfo } from './UserContext';

export default function UserProvider({children}:{children:ReactNode}) {
    const [id , setId] = useState<number | null>(null)
  return (
    <UserInfo.Provider value={{id:id , setId:setId}}>
        {children}
    </UserInfo.Provider>
  )
}
