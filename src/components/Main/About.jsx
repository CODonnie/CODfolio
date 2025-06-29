import React from 'react'

const About = () => {
    return (
        <div className='flex justify-center items-center w-full relative'>
            {/* fake border */}
            <div className='mobabout absolute inset-0 z-0 border-mask bg-[hsl(var(--foreground))] scale-[1] translate-x-[0.3%] translate-y-[-0.9%]'></div>
            {/* main div */}
            <div className="mobabout relative z-10 bg-[hsl(var(--background))]"></div>
        </div>
    )
}

export default About
