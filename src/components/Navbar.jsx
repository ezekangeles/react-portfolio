import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {BsFacebook, BsLinkedin, BsGithub} from 'react-icons/bs'
import {RiContactsFill} from 'react-icons/ri'
import {Link} from 'react-scroll'
import resume from '../assets/EzekielAngeles.pdf'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const handleClick = () =>{
        setNav(!nav)
    }

  return (
    <div className='fixed top-0 left-0 w-full h-20 bg-primary flex justify-between items-center z-50'>
      
      {/* logo */}
      <div>
        <h1 className='absolute top-5 logo px-5 text-5xl text-tertiary cursor-pointer z-50'>
          <Link Link to="hero" smooth={true} duration={500}>
              EA
          </Link>
        </h1>
      </div>

      {/* navbar menu */}
        <ul className='hidden sm:flex flex-row sm:mr-2'>
            <li className='navLIsm'>
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='navLIsm'>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='navLIsm'>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className='navLIsm'>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className='navLIsm'>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick}
      className='sm:hidden text-tertiary cursor-pointer hover:bg-secondary p-4 rounded-md transition text-xl z-10'>
        {nav ? <AiOutlineClose/> : <GiHamburgerMenu /> }
      </div>

      {/* navbar phone */}
       <ul className={nav ? `sm:hidden absolute w-full h-screen bg-primary top-0 left-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out` : 
       `sm:hidden absolute w-0 h-screen bg-primary top-0 -right-10 flex flex-col items-center justify-center transition-all duration-500 ease-in-out`}>
            <li className='navLImobile'>
              <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='navLImobile'>
              <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='navLImobile'>
              <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className='navLImobile'>
              <Link onClick={handleClick} Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className='navLImobile'>
              <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li className='navLImobile'>
              <a onClick={handleClick} href={resume} download>Resume</a>
              </li>
        </ul>

        {/* socials */}
        <div className='hidden fixed top-0 left-0 h-screen sm:flex items-center z-50'>
            <ul className=''>
                {/* <li className='flex justify-between w-32 flex-row items-center p-1 -ml-24 bg-blue-600 rounded-sm hover:ml-0 transition-all duration-500 cursor-pointer'>
                    <a href="" className='text-slate-100'>Facebook</a> 
                    <BsFacebook  className='text-xl text-slate-100'/>
                </li> */}
                <li className='socialIcons bg-black/75'>
                    <a href="https://github.com/ezekangeles" className='text-slate-100'>GitHub</a> 
                    <BsGithub  className='text-xl text-slate-100'/>
                </li>
                {/* <li className='socialIcons bg-emerald-300'>
                    <a href="" className='text-slate-100'>Email</a> 
                    <AiOutlineMail  className='text-xl text-slate-100'/>
                </li> */}
                <li className='socialIcons bg-secondary'>
                    <a href={resume} download className='text-slate-100'>Resume</a> 
                    <RiContactsFill  className='text-xl text-slate-100'/>
                </li>
                <li className='socialIcons bg-blue-400'>
                    <a href="https://www.linkedin.com/in/ezekiel-angeles-527a741a4/" className='text-slate-100'>LinkedIn</a> 
                    <BsLinkedin  className='text-xl text-slate-100'/>
                </li>
            </ul>
        </div>
       
   

    </div>
  )
}

export default Navbar
