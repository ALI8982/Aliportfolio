import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
     e.preventDefault();
console.log(e)
     emailjs
       .sendForm('service_3b6g8hi', 'template_u8rxnvb', form.current, {
         publicKey: 'Vpi3g_aDmSZ5ggi6y',
       })
       .then(
         () => {
           console.log('SUCCESS!');
         },
         (error) => {
           console.log('FAILED...', error.text);
         },
       );
  };

  return (
    <div className='my-24'>
      
      <h2 className='uppercase text-center text-[40px] text-[#FCD34D] mb-10'>Send us a Message</h2>

      <form className='flex flex-col w-[500px] mx-auto gap-4' ref={form} onSubmit={sendEmail}>

        <input className='rounded-full border-4 border-[#FEF9C3] focus:outline-[#FCD34D] ring-0 p-4 text-[20px]' placeholder='Fullname' type="text" name="user_name" />

        <input className='rounded-full border-4 border-[#FEF9C3] focus:outline-[#FCD34D] ring-0 p-4 text-[20px]' placeholder='Email' type="email" name="user_email" />

        <textarea className='rounded-3xl border-4 border-[#FEF9C3] focus:outline-[#FCD34D] ring-0 p-4 text-[20px]' placeholder='Message' name="message" />

        <input className='p-5 rounded-md cursor-pointer hover:bg-[#ffee35] bg-[#FCD34D] text-[20px] text-white font-medium' type="submit" value="Send" />

      </form>

    </div>
  );
};