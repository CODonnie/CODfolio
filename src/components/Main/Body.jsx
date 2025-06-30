import About from './About'
import Experience from './Experience'
import Hero from './Hero'
import Message from './Message'
import Projects from './Projects'
import Skills from './Skills'

const Body = () => {
  return (
    <div className='flex px-[8%] py-1 flex-col gap-5 relative'>
      <div className='flex flex-col'>
        <Hero />
        <About />
        <Skills />
      </div>
      {/*
      <div className='flex flex-col gap-5 relative'>
        <div className='w-[4vw] aspect-square rounded-full bg-[hsl(var(--background))] shade absolute left-[48%] top-[11%]'></div>
        <Projects />
        <div className='w-[7vw] aspect-square rounded-full bg-[hsl(var(--background))] shade absolute left-[-2%] bottom-[37%]'></div>
        <Experience />
      </div>
        <Message />
        */}
    </div>
  )
}

export default Body
