import { assets } from '../../assets/assets'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {

    const [text] = useTypewriter({
        words: ['Web Developer', 'Graphics Designer', 'Product Designer', 'Freelancer'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    return (
        <div className='flex justify-center items-center w-full pt-13'>
            <div className="mobhero relative z-10 grid grid-cols-3 justify-center items-center">
                <div className='flex flex-col justify-center items-start absolute top-[16%] right-[11%] z-0'>
                    <p className='px-1'>Hi, I'm</p>
                    <p className='text-6xl font-semibold tracking-tighter leading-none textEffect'>DONNIE</p>
                    <p className='px-1'><span style={{fontWeight: 'normal', color: 'white'}}>{text}<Cursor cursorColor="hsl(163, 88%, 76%)" cursorStyle='|'/></span></p>
                </div>
                <img src={assets.dee1} alt="" className='w-80 z-20 col-span-2' />
            </div>
        </div>
    )
}

export default Hero;
