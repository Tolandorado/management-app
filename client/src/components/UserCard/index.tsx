import { User } from '@/src/state/api'
import Image from 'next/image'
import React from 'react'

type Props = {
    user: User
}

const UserCard = ({user}: Props) => {
  return (
    <div className='flex rounded items-center border p-4 shadow'>
        {user.profilePictureUrl && (
            <Image 
            src={`/p1.jpg`}
            alt="Profile pic"
            width={32}
            height={32}
            className='rounded-full'/>
        )}
        <div>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
        </div>
    </div>
  )
}

export default UserCard