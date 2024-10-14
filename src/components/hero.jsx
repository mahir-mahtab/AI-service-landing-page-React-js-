import React from 'react'
import vid1 from '../assets/video1.mp4'
import vid2 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-6 lg-mt-20'>
        <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">VirtualR build tools <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900'> {" "}for Developor</span> </h1>
        <p className='max-w-4xl mt-4 text-lg tracking-wider text-center break-all text-neutral-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate ut dolore ullam mollitia deleniti in, ipsa dolor tenetur fugiat, sequi quibusdam commodi doloribus cum necessitatibus? Laborum sed perferendis ab.

        </p>
        <div className='flex flex-row-reverse items-center justify-center gap-4 mt-6'>
        <a href="#" className='px-3 py-2 border rounded'> Documantation</a>
        <a href="#" className='px-3 py-2 border rounded bg-gradient-to-r from-orange-500 to-orange-800'> Start for Free </a>
        </div>
        <div className='flex items-center justify-center max-w-6xl mx-auto mt-10'  >
          <video 
          autoPlay loop muted
          src={vid1} className='flex-1 w-1/2 mx-2 my-4 border-orange-600 rounded-lg shadow-orange-400'></video>
           <video 
          autoPlay loop muted
          src={vid2} className='flex-1 w-1/2 mx-2 my-4 border-orange-600 rounded-lg shadow-orange-400'></video>
          
        </div>
      
    </div>
  )
}

export default Hero;
