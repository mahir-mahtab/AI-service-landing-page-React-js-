import React from 'react'
// import {}
import { features } from '../constants/index.jsx'

const Features = () => {
  return (
    <div className='mt-20'>
      <div className='relative border-b border-neutral-800 min-h-[800px]'>
        <div className="text-center">
            <span className='h-6 py-1 text-sm font-medium text-orange-500 uppercase rounded-full bg-neutral-900 pc-2'>
                feature
            </span>
            <h2 className='mt-10 text-3xl tracking-wide sm:text-5xl lg-text-6xl lg-mt-20'>
                Easily build <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900'>Your Code</span>
            </h2>
        </div>
        <div className='flex flex-wrap items-center justify-center mt-10 space-y-8'>
            {features.map((feature, index) => (
                <div key={index} className='flex w-full gap-1 sm:w-1/2 lg:w-1/3'>
                    <div className='flex items-center justify-center h-10 p-2 mx-6 text-orange-700 rounded-full bg-neutral-900'> {feature.icon}</div>
                    <div>
                        <h5 className='mt-1 mb-6 text-md'>{feature.text}</h5>
                        <p className='mb-3 text-sm text-neutral-500'>{feature.description}</p>
                    </div>


                </div>
))}
        </div>
      </div>
    </div>
  )
}

export default Features
