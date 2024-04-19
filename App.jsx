import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import 'react-multi-carousel/lib/styles.css';
import WatchSlider from './components/WatchSlider'
import IcSlider from './components/IcSlider';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Homepage  />
      <Contact />
      <WatchSlider />
      <IcSlider />
    </>
  )
}

export default App
