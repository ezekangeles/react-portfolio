import React from 'react'
import {BsArrowRight} from 'react-icons/bs'


const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-primary'>
        <div className='flex flex-col justify-center w-full h-full px-2 max-w-[1000px] mx-auto sm:px-10'>
            <p className='text-secondary'>My name is</p>
            <h1 className='text-4xl text-slate-100 font-bold sm:text-6xl'>Ezekiel Angeles</h1>
            <p className='text-xl text-tertiary mt-2'>I'm a Front End Developer</p>
            <p className='text-quarternary mt-1'>I'm a Front End Developer specializing in building and designing
                exceptional digital experiences. Currently, I'm focused of building
                responsive Front End Web Applications
            </p>
            <div className='mt-3'>
                <button className='group border border-slate-200 px-2 py-1 flex flex-row items-center gap-2 text-slate-200 rounded-md hover:bg-slate-100 hover:text-primary transition-all'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300 transition-all'>
                        <BsArrowRight /> 
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero
