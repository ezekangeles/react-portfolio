import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-primary'>
        <div className='flex flex-col justify-center w-full h-full px-2 max-w-[600px] mx-auto'>
            <div>
                <p className='sm:text-center text-tertiary decoration-secondary text-3xl underline underline-offset-4 font-bold mb-3 uppercase'>Contact Me</p>
            </div>
            <form method='POST' action='https://getform.io/f/7559c1a4-4f3d-487d-9823-d213f2b98a0a' className='flex flex-col sm:px-8 relative'>
                <input className='input rounded-t-md' type="text" name="name" placeholder='Name'/>
                <input className='input' type="email" name="email" placeholder='Email' />
                <textarea className='input rounded-b-md' name="message" cols="30" rows="10" placeholder='Message me...'></textarea>
                <div className='w flex justify-end'>
                    <button className=' w-1/2 sm:w-1/3 md:w-1/4 py-1 text-slate-200 rounded-md border border-slate-200 font-bold hover:bg-slate-200 hover:text-secondary'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
