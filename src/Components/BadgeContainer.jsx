import React from 'react'
import Badge from './Badge'

export const BadgeContainer = () => {
  return (
    <div className='flex justify-center gap-32 mt-24 flex-wrap'>
     
     <Badge circle={"8+"} info={"years"} info1={"Experience"}/>
     
     <Badge circle={"20+"} info={"created"} info1={"Projects"}/>
     
     <Badge circle={"5+"} info={"companies"} info1={"Work"}/>
    </div>
  )
}
export default BadgeContainer 
