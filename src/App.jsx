// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return <main className='overflow-x-hidden bg-white dark:bg-black'>
    <Navbar />
    <Hero />
  </main>
}

export default App;
