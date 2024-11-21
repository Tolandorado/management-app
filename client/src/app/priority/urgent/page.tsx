import React from 'react'
import ReusablePage from '../reusablePage'
import { Priority } from '@/src/state/api'



const Urgent = () => {
  return (
    <ReusablePage priority={Priority.Urgent}/>
  )
}

export default Urgent