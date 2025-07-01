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
        <div className="relative h-[30px] overflow-hidden">
            {logos.map((logo, index) => (
                <img key={index} src={logo} alt="" className="w-[30px] h-[30px] object-contain absolute animate-infinite-scroll" style={{ animationDelay: `${((30 / logos.length) * (logos.length - (index + 1))) * -1}s`, top: 0,left: '100%'}} />
            ))}
        </div>
    )
}

export default Skills
