import React from 'react'
import { assets } from '../../assets/assets'

const Skills = () => {

    const width = "w-7"
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col gap-2'>
                <p className='text-xl grid justify-end'>Skills</p>
                <div className='flex gap-3'>
                    <img src={assets.ai} alt='' className={width} />
                    <img src={assets.ps} alt='' className={width} />
                    <img src={assets.canva} alt='' className={width} />
                    <img src={assets.xd} alt='' className={width} />
                    <img src={assets.react} alt='' className={width} />
                    <img src={assets.redis} alt='' className={width} />
                    <img src={assets.expressjs} alt='' className={width} />
                    <img src={assets.mongo} alt='' className={width} />
                    <img src={assets.postgresql} alt='' className={width} />
                    <img src={assets.html} alt='' className={width} />
                    <img src={assets.tailwind} alt='' className={width} />
                    <img src={assets.css} alt='' className={width} />
                    <img src={assets.docker} alt='' className={width} />
                    <img src={assets.figma} alt='' className={width} />
                    <img src={assets.git} alt='' className={width} />
                    <img src={assets.github} alt='' className={width} />
                    <img src={assets.graphql} alt='' className={width} />
                    <img src={assets.js} alt='' className={width} />
                    <img src={assets.ts} alt='' className={width} />
                    <img src={assets.jwt} alt='' className={width} />
                    <img src={assets.npm} alt='' className={width} />
                    <img src={assets.nodejs} alt='' className={width} />
                    <img src={assets.sass} alt='' className={width} />
                </div>
            </div>
        </div>
    )
}

export default Skills
