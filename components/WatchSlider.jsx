import React from 'react'
import ic1 from '../assets/ic1.png';
import ic2 from '../assets/ic2.png';
import ic3 from '../assets/ic3.png';
import ic4 from '../assets/ic4.png';
import ic5 from '../assets/ic5.png';
import ic6 from '../assets/ic6.png';
import ic7 from '../assets/ic7.png';
import ic8 from '../assets/ic8.png';
import ic9 from '../assets/ic9.png';
import ic10 from '../assets/ic10.png';
import ic11 from '../assets/ic11.png';
import ic12 from '../assets/ic12.png';
import ic13 from '../assets/ic13.png';
import ic14 from '../assets/ic14.png';
import ic15 from '../assets/ic15.png';
import ic16 from '../assets/ic16.png';
import ic17 from '../assets/ic17.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function WatchSlider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <div id='target' className='md:mt-16 mt-5 ' >
       <h1 className='md:text-3xl text-2xl font-bold md:ml-10 ml-7 ' >Mobile IC'S</h1>
    <div className='md:ml-10 ml-15 ml-7 md:my-5 ' >
  <Carousel className='h-56 w-full ' responsive={responsive}>
    <div className='md:w-56 ' ><img src={ic2} alt="" /></div>
    <div className='md:w-56  ' ><img src={ic1} alt="" /></div>
    <div className='md:w-56  ' ><img src={ic3} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic5} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic6} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic7} alt="" /></div>
    <div className='md:w-56' ><img src={ic8} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic9} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic10} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic11} alt="" /></div>
    <div className='md:w-56' ><img src={ic12} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic13} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic14} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic4} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic15} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic16} alt="" /></div>
    <div className='md:w-56 ' ><img src={ic17} alt="" /></div>
  </Carousel>
      </div>
    </div>
  )
}

export default WatchSlider
