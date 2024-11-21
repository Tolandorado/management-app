import React from 'react'
import ReusablePage from '../reusablePage'
import { Priority } from '@/src/state/api'



const High = () => {
  return (
    <ReusablePage priority={Priority.High}/>
  )
}

export default High