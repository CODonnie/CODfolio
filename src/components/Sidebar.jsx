import { assets } from '../assets/assets';
import { UnfoldHorizontal, FoldHorizontal, X } from 'lucide-react';

const Sidebar = ({ children, aside, setAside, expanded, setExpanded }) => {


    return (
        <div>
            <aside className={`overflow-hidden transition-all duration-200 ${expanded ? 'h-screen bg-[hsl(var(--background))] flex flex-col w-full ' : 'h-screen bg-[hsl(var(--background))] flex flex-col w-[40%] shadow-[-6px_0_12px_rgba(173,255,226,0.5)]'}`}>
                <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'flex items-center gap-9 px-3 py-4 w-full' : "flex flex-start justify-between px-3 py-4 w-auto"}`}>
                    <div className='flex items-center'>
                        <img src={assets.codLogo1} alt='COD Logo' className={`overflow-hidden transition-all duration-500 ${expanded ? "w-7" : "w-0"} duration-500`} />
                        <p className={`overflow-hidden transition-all duration-500 ${expanded ? "text-sm font-[350]" : "hidden"} duration-500`}>CODONNIE</p>
                    </div>
                    <div className='flex justify-between items-center gap-5 duration-500'>
                        {expanded ? <FoldHorizontal onClick={() => setExpanded(!expanded)} /> : <UnfoldHorizontal onClick={() => setExpanded(!expanded)} />}
                        <X onClick={() => setAside(!aside)
                            } />
                    </div>
                </div>

                {/* navigations */}
                <nav>
                    <ul className='flex flex-col gap-7 px-4 py-3 '>
                        {children}
                    </ul>
                </nav>

                {/* connect btn */}
                <div className='flex justify-start items-center gap-10 px-4 py-3 w-full mt-auto'>
                    <img src={assets.codround} alt='COD Logo' className='w-8' />
                    <button className={`overflow-hidden transition-all duration-500 ${expanded ? "rounded border-1 border-[hsl(var(--foreground))] px-4 py-1 cursor-pointer" : "hidden"}`}>Let's Connect</button>

                </div>
            </aside>
        </div>
    )
}
export function SidebarItem({ name, icon, expanded, setAside, aside}) {
    if (expanded) {
        return (
            <li className='flex gap-10 items-center' onClick={() => setAside(!aside)}>{icon} <span>{name}</span></li>
        );
    } else {
        return (
            <li className='flex gap-10 items-center' onClick={() => setAside(!aside)}>{icon}</li>
        );
    }
}

export default Sidebar
