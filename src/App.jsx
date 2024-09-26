// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Qoutes from './components/Qoutes';
import Bot from './components/Bot';

const App = () => {
  return <main className='overflow-x-hidden bg-white dark:bg-dark text-black dark:text-white duration-300'>
    <Navbar />
    <Hero />
    <Bot />
    <Qoutes />
  </main>
}

export default App;
