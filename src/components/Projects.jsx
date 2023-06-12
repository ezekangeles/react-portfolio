import React from 'react'
import youtube from '../assets/youtube.PNG'
import netflix from '../assets/netflix.PNG'
import todolist from '../assets/todo-list.PNG'
import weather from '../assets/weather-app.PNG'


const Projects = () => {

    const projects = [{
        title: 'Youtube Clone',
        img: youtube,
        site: 'https://ezekangeles.github.io/youtube-clone/',
        hub: 'https://github.com/ezekangeles/netflix-clone'
    },{
        title: 'NetFlix Clone',
        img: netflix,
        site: 'https://ezekangeles.github.io/netflix-clone/',
        hub: 'https://github.com/ezekangeles/youtube-clone'
    },{
        title: 'Weather App',
        img: weather,
        site: 'https://ezekangeles.github.io/weather-forecast/',
        hub: 'https://github.com/ezekangeles/weather-forecast'
    },{
        title: 'Todo List',
        img: todolist,
        site: 'https://ezekangeles.github.io/todo-list/',
        hub: 'https://github.com/ezekangeles/todo-list'
    }]

  return (
    <div name='projects' className='w-full h-screen bg-primary'>
      <div className='flex flex-col justify-center w-full h-full px-2 max-w-[1000px] mx-auto'>
            <div>
                <p className='sm:text-center text-tertiary decoration-secondary text-3xl underline underline-offset-4 font-bold mb-3 uppercase'>Projects</p>
            </div>
            <div className='mt-10 grid sm:grid-cols-2 gap-4 sm:gap-2 px-8'>
                {projects.map((item) =>{
                    return (
                        <div className='relative rounded-md'>
                            <div className='block'>
                                <img src={item.img} className='rounded-md'/>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2 absolute transition-all duration-500 rounded-md w-full h-full top-0 left-0 opacity-0 hover:opacity-100 hover:bg-black/75'>
                                <p className='text-white text-2xl font-bold'>{item.title}</p>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <a href={item.site} className='text-slate-700 bg-white px-3 py-1 rounded-md hover:bg-slate-900 hover:text-white transition-all'>Demo</a>
                                    <a href={item.hub} className='text-slate-700 bg-white px-3 py-1 rounded-md hover:bg-slate-900 hover:text-white transition-all'>Code</a>
                                </div>
                            </div>
                            
                        </div>
                        
                    )
                })}
            </div>
      </div>
    </div>
  )
}

export default Projects
