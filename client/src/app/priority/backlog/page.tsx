import React from 'react'
import ReusablePage from '../reusablePage'
import { Priority } from '@/src/state/api'



const Backlog = () => {
  return (
    <ReusablePage priority={Priority.Backlog}/>
  )
}

export default Backlog