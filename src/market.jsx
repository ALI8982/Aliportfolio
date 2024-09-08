import { Monitor, LucideFolderKanban, ListOrdered, Search, Presentation, MessageSquareText } from 'lucide-react'
import React from 'react'

export const Market = () => {
  return (
    <div className='flex flex-wrap'>
        <div className='size-[500px] flex flex-col px-12 py-24 '>
            <h1 className='w-12 h-12'><Monitor /></h1>
            <h1 className='text-[48px]'>Market Analysis</h1>
            <p className='text-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>   
        </div>
        <div className='size-[500px] flex flex-col px-10 py-24'>
            <h1 className='w-12 h-12'> <LucideFolderKanban />  </h1>
            <h1 className='text-[48px]'>Funds Management</h1>
            <p className='text-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
        </div> 
        <div className='size-[500px] flex flex-col px-12 py-24'>
            <h1 className='w-12 h-12'> <Presentation /> </h1>
            <h1 className='text-[48px]'>PR & Marketing</h1>
            <p className='text-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>   
        </div>   
        <div className='size-[500px] flex flex-col px-12 py-24'>
            <h1 className='w-12 h-12'> <ListOrdered /> </h1>
            <h1 className='text-[48px]'>Business Planning</h1>
            <p className='text-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>   
        </div>
        <div className='size-[500px] flex flex-col px-12 py-24'>
            <h1 className='w-12 h-12'> <Search /> </h1>
            <h1 className='text-[48px]'>Audit</h1>
            <p className='text-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>   
        </div>
        <div className='size-[500px] flex flex-col px-12 py-24'>
            <h1 className='w-12 h-12'> <MessageSquareText /> </h1>
            <h1 className='text-[48px]'>Consulting</h1>
            <p className='text-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>   
        </div>
    </div>
  )
}

export default Market