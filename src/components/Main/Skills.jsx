import React from 'react'
import { assets } from '../../assets/assets'

const Skills = () => {

    const logos = [
        assets.ai,
        assets.ps,
        assets.canva,
        assets.xd,
        assets.react,
        assets.redis,
        assets.expressjs,
        assets.mongo,
        assets.postgresql,
        assets.html,
        assets.tailwind,
        assets.css,
        assets.docker,
        assets.figma,
        assets.git,
        assets.github,
        assets.graphql,
        assets.js,
        assets.ts,
        assets.jwt,
        assets.npm,
        assets.nodejs,
        assets.sass,
    ];

    return (
        <div className='flex flex-col gap-4'>
            <p className='text-xl flex justify-end'>Skills</p>
            <div className="relative h-[30px] overflow-hidden" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))' }}>
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="" className="w-[30px] h-[30px] object-contain absolute animate-infinite-scroll" style={{ animationDelay: `${((30 / logos.length) * (logos.length - index)) * -1}s`, top: 0, left: '100%' }} />
                ))}
            </div>
        </div>
    )
}

export default Skills
