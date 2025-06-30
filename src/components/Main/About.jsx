import React from 'react'

const About = () => {
    return (
        <div className='flex justify-center items-center w-full relative'>
            {/* main div */}
            <div className="mobabout z-10 flex flex-col gap-2">
                <h2 className='text-xl '>About</h2>
                <p className=''>Hi, I’m Ordu Donald — a Full-Stack Developer and Creative Designer with over 5 years of experience building clean, user-friendly digital products. I combine strong technical skills with a good eye for design to create web apps that not only work well but also look great.

I’ve built projects like a Netflix-style streaming app, a job board with role-based access, and a secure file-sharing platform. I work mostly with tools like React, Express, TypeScript, and Firebase, and I enjoy turning complex ideas into easy-to-use solutions.<br /><br/>

My goal is always to build tools that make people’s lives easier—whether that’s through fast, reliable code or thoughtful design. I enjoy learning, working on real-world problems, and helping brands grow their digital presence.</p>
            </div>
        </div>
    )
}

export default About
