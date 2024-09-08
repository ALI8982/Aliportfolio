import React from 'react'

const Badge = (circle, info, info1) => {
  return (
    <div className='flex flex-col gap-6 w-min'>
        <div className='border-8 border-amber-300 p-8 text-[22px] font-bold w-min rounded-full'>
            {circle}
        </div>
        <div>
            <p className='text-center'>{info}</p>
            <p className='text-center text-amber-500 font-medium'>{info1}</p>
        </div>
    </div>
  )
}
export default Badge