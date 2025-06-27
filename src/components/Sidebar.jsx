import { useState } from 'react';
import { assets } from '../assets/assets';
import { ArrowLeftToLine, X } from 'lucide-react';

const Sidebar = ({ children, aside, setAside, expanded, setExpanded }) => {


    return (
        <div>
            <aside className='h-screen flex flex-col w-[75%] border-r-1'>
                <div className='flex justify-center items-center gap-10 px-4 py-3 w-full'>
                    <div className='flex items-center'>
                        <img src={assets.codLogo1} alt='COD Logo' className='w-10 h-10 sm:w-18 sm:h-18' />
                        <p className='text-sm font-[350]'>CODONNIE</p>
                    </div>
                    <div className='flex justify-between items-center gap-10'>
                        <ArrowLeftToLine onClick={() => setExpanded(!expanded)} />
                        <X onClick={() => setAside(!aside)} />
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
                    <button className='rounded border-1 border-[hsl(var(--foregroundr))] px-4 py-1 cursor-pointer hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] transition'>Let's Connect</button>

                </div>
            </aside>
        </div>
    )
}
export function SidebarItem({ name, icon, expanded }) {
    if (expanded) {
        return (
            <li className='flex gap-10 items-center'>{icon} <span>{name}</span></li>
        );
    } else {
        return (
            <li className='flex gap-10 items-center'>{icon}</li>
        );
    }
}

export default Sidebar
