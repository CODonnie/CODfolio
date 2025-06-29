import React from 'react'

const Hero = () => {
    return (
        <div className='flex justify-center items-center w-full relative'>
            {/* fake border */}
            <div className='mobhero absolute inset-0 z-0 border-mask bg-[hsl(var(--foreground))] scale-[1] translate-x-[0.3%] translate-y-[0.8%]'></div>
            {/* main div */}
            <div className="mobhero relative z-10 bg-[hsl(var(--background))]"></div>
        </div>
    )
}

export default Hero
