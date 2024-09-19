import React from 'react';
import Logo from './../assets/logo.png';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';
import DarkMode from './DarkMode';

const NavLinks = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Projects', url: '/projects' },
  { id: 4, name: 'Contact', url: '/contact' },
];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handleDrag = (e) => {
    // Check if sidebar is dragged out of view
    if (e.clientX < 0 || e.clientX > window.innerWidth) {
      setShowSidebar(false);
      setIsDragging(false);
    }
  };

  React.useEffect(() => {
    // Add event listeners for dragging
    window.addEventListener('mousemove', handleDrag);
    return () => {
      window.removeEventListener('mousemove', handleDrag);
    };
  }, []);

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
                  {showSidebar ? (
                    <HiMenuAlt1 onClick={toggleSidebar} className='cursor-pointer' size={30} />
                  ) : (
                    <HiMenuAlt3 onClick={toggleSidebar} className='cursor-pointer' size={30} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white dark:bg-gray-800 transition-transform duration-300 transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } z-[9998] shadow-lg border-b-2 border-gray-200 dark:border-gray-600`}
        style={{ 
          transition: isDragging ? 'none' : 'transform 0.3s ease' // Handle transition during dragging
        }}
      >
        <div className='flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900'>
          <p className='text-2xl font-bold text-black dark:text-white'>
            V<span className='text-primary'>Media</span>
          </p>
          <AiOutlineClose
            className='text-3xl cursor-pointer text-black dark:text-white'
            onClick={toggleSidebar}
          />
        </div>
        <ul className='flex flex-col gap-6 p-4'>
          {NavLinks.map(({ id, name, url }) => (
            <li key={id}>
              <a
                href={url}
                className='text-xl font-semibold text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300'
                onClick={toggleSidebar} // Close sidebar on click
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-[9997]'
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Add padding to avoid content overlap */}
      <div className='pt-[80px]'> {/* Adjust padding based on the navbar height */}
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default Navbar;
