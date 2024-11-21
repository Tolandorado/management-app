import React from 'react'
import ReusablePage from '../reusablePage'
import { Priority } from '@/src/state/api'



const Low = () => {
  return (
    <ReusablePage priority={Priority.Low}/>
  )
}

export default Low