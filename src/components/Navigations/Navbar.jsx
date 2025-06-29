import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { Menu, House, CircleUser, Wrench, FolderOpenDot, Hourglass, Phone, Unplug } from 'lucide-react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { SidebarItem } from './Sidebar'

const Navbar = () => {

    const [aside, setAside] = useState(false);
    const [expanded, setExpanded] = useState(true);

    const nav = [
        { name: 'Home', path: '#', icon: <House /> },
        { name: 'About', path: '#about', icon: <CircleUser /> },
        { name: 'Skills', path: '#skills', icon: <Wrench /> },
        { name: 'Projects', path: '#projects', icon: <FolderOpenDot /> },
        { name: 'Experience', path: '#experience', icon: <Hourglass /> },
        { name: 'Contact Me', path: '#contact', icon: <Phone /> },
    ]

    return (
        <>
            {/* side nav */}
            <aside className={`fixed bg-[hsl(var(--background))] top-0 left-0 min-h-screen z-50 transition-all duration-300 ease-in-out
  ${aside ? 'w-60' : 'w-0'} ${expanded ? 'shadow-[-6px_0_12px_rgba(173,255,226,0.5)]' : 'shadow-[-6px_0_12px_rgba(173,255,226,0)] bg-[rgba(0,0,0,0)]' } overflow-y-auto`}>
                <Sidebar aside={aside} setAside={setAside} expanded={expanded} setExpanded={setExpanded}>{
                    nav.map((links) => {
                        return (
                            <a href={links.path} key={links.path}>
                                <SidebarItem expanded={expanded} aside={aside} setAside={setAside} name={links.name} icon={links.icon} />
                            </a>
                        )
                    }
                    )
                }</Sidebar>
            </aside>

            {/* main nav */}
            <main className='w-full flex flex-col'>
                <div className='flex justify-between items-center px-5 my-4 sm:px-0'>
                    <Menu className='block sm:hidden' onClick={() => setAside(!aside)} />
                    <div className={`${aside ? "flex justify-end items-center invisible" : 'flex justify-end items-center'}`}>
                        <img src={assets.codLogo1} alt='COD Logo' className='w-10 h-10 sm:w-18 sm:h-18' />
                        <p className='text-sm font-[350]'>CODONNIE</p>
                    </div>
                </div>

                <div className='hidden sm:flex items-center'>
                    <nav className="flex gap-10 text-base">
                        {nav.map((links) => {
                            return (<NavLink
                                key={links.path}
                                to={links.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[hsl(var(--accent-color))]"
                                        : "text-[hsl(var(--foreground))] hover:scale-110 transition"
                                }
                            >
                                {links.name}
                            </NavLink>)
                        })}
                    </nav>
                </div>
                <div className='items-center hidden sm:flex'>
                    <button className='rounded border-1 border-[hsl(var(--foregroundr))] px-7 py-1 cursor-pointer hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] transition'>Connect with me</button>
                </div>
            </main>
        </>
    )
}

export default Navbar
