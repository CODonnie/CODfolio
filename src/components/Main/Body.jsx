import About from './About'
import Experience from './Experience'
import Hero from './Hero'
import Message from './Message'
import Projects from './Projects'
import Skills from './Skills'

const Body = () => {
  return (
    <div className='flex px-[8%] py-10 flex-col gap-5 relative backg'>
      <div className='flex flex-col gap-5 relative'>
        <Hero />
        <div className='w-[9vw] aspect-square rounded-full border-1 border-[hsl(var(--foreground))] absolute left-[93%] bottom-[28%]'></div>
        <About />
      </div>
      {/*
      <div className='flex flex-col gap-5 relative'>
        <Skills />
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
