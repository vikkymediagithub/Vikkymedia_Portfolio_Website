import React from 'react';
import Logo from './../assets/logo.png';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from './DarkMode';

const NavLinks = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Projects', url: '/projects' }, // Fixed casing of 'projects'
  { id: 4, name: 'Contact', url: '/contact' },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {/* Navbar */}
      <div className='relative z-[9999] text-black dark:text-white duration-300'>
        <div className='container'>
          {/* Fixed Navbar */}
          <div className='fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/30 dark:bg-black/30 shadow-md h-[80px] z-[9999] transition-all duration-300 flex items-center'>
            <div className='flex justify-between items-center w-full px-4 md:px-10'>
              {/* Logo section */}
              <div className='flex items-center gap-3 cursor-pointer'>
                <img src={Logo} alt="Logo" className='h-12' />
                <p className='text-3xl font-bold'>V<span className='text-primary'>Media</span></p>
              </div>
              
              {/* Desktop Menu */}
              <nav className='hidden md:flex items-center gap-8'>
                {NavLinks.map(({ id, name, url }) => (
                  <li key={id} className='list-none'>
                    <a
                      href={url}
                      className='text-xl font-semibold hover:text-primary transition-colors duration-300 px-4 py-2'
                    >
                      {name}
                    </a>
                  </li>
                ))}
                {/* DarkMode features */}
                <DarkMode />
              </nav>

              {/* Mobile Menu Toggle */}
              <div className='md:hidden block'>
                <div className='flex items-center gap-5'>
                  <DarkMode />
                  {showMenu ? (
                    <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer' size={30} />
                  ) : (
                    <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer' size={30} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding to avoid content overlap */}
      <div className='pt-[80px]'> {/* Adjust padding based on the navbar height */}
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default Navbar;
