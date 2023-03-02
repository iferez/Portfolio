import React from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav  from "./components/Nav";
import Services from './components/Services';
import Work from './components/Work';

const App = () => {
  return (
    <div className='bg-home bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
