// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from './../assets/logo.png';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from './DarkMode';

const NavLinks = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Projects', url: '/Projects' },
  { id: 4, name: 'Contact', url: '/contact' },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className='relative z-[9999]text-black dark:text-white duration-300'>
        <div className='container py-2 md:py-0'>
            <div className='flex justify-between items-center'>
                {/* logo section */}
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img src={Logo} alt="" className='h-16' />
                    <p className='text-3xl'>V <span className='font-bold'>Media</span></p>
                </div>
                {/* Desktop menu section */}
                <nav className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {NavLinks.map(({id, name, link}) => {
                                return (
                                    <li key={id} className='py-4'><a href={link} className='text-xl font-semibold hover:text-primary cursor-pointer py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>{name}</a></li>
                                );
                            })}
                            {/* DarkMode features */}
                            <DarkMode />
                        </ul>
                    </nav>
                    {/* Mobile view section */}
                    <div className='md:hidden block'>
                       <div className='flex items-center gap-5'>
                       <DarkMode />
                        {showMenu ? 
                            ( 
                              <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer' size={30} /> 
                            ) 
                            :
                            ( 
                              <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer' size={30} /> 
                            )
                        }
                       </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;