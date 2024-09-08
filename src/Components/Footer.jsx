import { Github, Instagram, Mail } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-yellow-100 w-screen md:flex justify-center'>
        <div>
        <h1 className='text-[64px] text-amber-500 font-shadowsIntoLight py-[24px] md:py-[48px] flex justify-center'>Muhammad Ali </h1>
        </div>
        <div className='flex flex-col md:justify-center pl-[44px] md:pl-[84px] pb-[12px]'>
            <h1 className='flex gap-[12px] py-2 text-amber-500'><Mail /> alikhan.kakar@gmail.com</h1>
            <h1 className='flex gap-[12px] py-2 text-amber-500'><Instagram /> AliKhan888</h1>
            <h1 className='flex gap-[12px] py-2 text-amber-500'><Github /> AliKhan888</h1>
        </div>
    </div>
  )
}

export default Footer