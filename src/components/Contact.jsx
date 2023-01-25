import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ...'>
        <form method='POST' action='https://getform.io/f/ec67ad87-493b-4042-ac66-9fba4b568026' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600 text-[#ccd6f6]'>Contact</p>
                <p className='py-4 text-[#ccd6f6]'>// Get in contact with me by either filling out the form below or emailing me karlgraves28@gmail.com</p>
            </div>
            <input className='my-4 p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2' type='email' placeholder='Email' name='email' />
            <textarea className='my-4 p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-[#ccd6f6] border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact