import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-primary'>
      <div className='flex flex-col justify-center w-full h-full px-2 max-w-[1000px] mx-auto'>
        <div>
            <p className='sm:text-center text-tertiary decoration-secondary text-3xl underline underline-offset-4 font-bold mb-3 uppercase'>About</p>
        </div>
        <div className='flex flex-col gap-5 mt-4 text-quarternary sm:grid sm:grid-cols-2 sm:p-10 items-center'>
            <p className='text-xl sm:text-3xl'>
                Hi. I'm Ezekiel, nice to meet you. Please take a look around
            </p>
            <p className='text-sm sm:text-base'>
                I am passionate about building excellent web applications that improves
                the lives of those around me. I specialize in creating software for 
                clients ranging from individuals and small businesses all the way to large 
                enterprise corporations. What would you do if you had software expert available
                at your fingertips?
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
