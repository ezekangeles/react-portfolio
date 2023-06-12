import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.png'
import npm from '../assets/npm.png'
import firebase from '../assets/firebase.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-primary'>
        <div className='flex flex-col justify-center w-full h-full px-2 max-w-[1000px] mx-auto'>
            <div>
                <p className='sm:text-center text-tertiary decoration-secondary text-3xl underline underline-offset-4 font-bold mb-3 uppercase'>Skills</p>
            </div>
            <div className='grid grid-cols-2 gap-1 overflow-hidden sm:grid-cols-4 justify-center items-center'>
                <div className='skillLogo'>
                    <img src={html} alt="HTML" 
                    className='w-12 sm:w-20'/>
                    <p className='skillText'>HTML</p>
                </div>
                <div className='skillLogo'>
                    <img src={css} alt="CSS" 
                    className='w-12 sm:w-20'/>    
                    <p className='skillText'>CSS</p>
                </div>
                <div className='skillLogo'>
                <img src={javascript} alt="JAVASCRIPT" 
                className='w-12 sm:w-20'/>
                    <p className='skillText'>JAVASCRIPT</p>
                </div>
                <div className='skillLogo'>
                    <img src={tailwind} alt="TAILWIND" 
                    className='w-12 sm:w-20'/>
                    <p className='skillText'>TAILWIND</p>
                </div>
                <div className='skillLogo'>
                    <img src={react} alt="REACT" 
                    className='w-12 sm:w-20'/>
                    <p className='skillText'>REACT</p>
                </div>
                <div className='skillLogo'>
                    <img src={git} alt="GIT" 
                    className='w-12 sm:w-20'/>
                    <p className='skillText'>GIT</p>
                </div>
                <div className='skillLogo'>
                    <img src={npm} alt="NPM" 
                    className='w-12 sm:w-20'/>
                    <p className='skillText'>NPM</p>
                </div>
                <div className='skillLogo'>
                    <img src={firebase} alt="FIREBASE" 
                    className='w-12 sm:w-20'/>
                    <p className='skillText'>FIREBASE</p>
                </div> 
            </div>
        </div> 
    </div>
  )
}

export default Skills
