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
        <div className="flex justify-center items-center overflow-hidden">
            <div className="relative w-[530px] h-[48px]">
                <div className="absolute flex gap-4 animate-infinite-scroll">
                    {/* Duplicate logos for seamless looping */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt="" className="w-6 object-contain" />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Skills
