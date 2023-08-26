import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 pr-2 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>/ /Submit the form below or shoot me an email.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="name" />
            <input className='bg-[#ccd6f6] p-2 my-4' type="email" placeholder='Email' name="email" />
            <textarea className='bg-[#ccd6f6] p-2' rows="10" placeholder='Message' name="message" />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}
