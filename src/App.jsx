// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Qoutes from './components/Qoutes';

const App = () => {
  return <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300'>
    <Navbar />
    <Hero />
    <Qoutes />
  </main>
}

export default App;
