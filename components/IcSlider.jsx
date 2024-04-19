import React from 'react'
import w1 from '../w2/w1.png';
import w2 from '../w2/w2.png';
import w3 from '../w2/w3.png';
import w4 from '../w2/w4.png';
import w5 from '../w2/w5.png';
import w6 from '../w2/w6.png';
import w7 from '../w2/w7.png';
import w8 from '../w2/w8.png';
import w9 from '../w2/w9.png';
import w10 from '../w2/w10.png';
import w11 from '../w2/w11.png';
import w12 from '../w2/w12.png';
import w13 from '../w2/w13.png';
import w14 from '../w2/w14.png';
import w15 from '../w2/w15.png';
import w16 from '../w2/w16.png';
import w17 from '../w2/w17.png';
import w18 from '../w2/w18.png';
import w19 from '../w2/w19.png';
import w20 from '../w2/w20.png';
import w21 from '../w2/w21.png';
import w22 from '../w2/w22.png';
import w23 from '../w2/w23.png';
import w24 from '../w2/w24.png';
import w25 from '../w2/w25.png';
import w26 from '../w2/w26.png';
import w27 from '../w2/w27.png';
import w28 from '../w2/w28.png';
import w29 from '../w2/w29.png';
import w30 from '../w2/w30.png';
import w31 from '../w2/w31.png';
import w32 from '../w2/w32.png';
import w33 from '../w2/w33.png';
import w34 from '../w2/w34.png';
import w35 from '../w2/w35.png';
import w36 from '../w2/w36.png';
import w37 from '../w2/w37.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function IcSlider() {
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
    <div>
     <h1 className='md:text-3xl text-2xl md:mt-5 md:mb-5 font-bold ml-7' >Watches</h1>
    <div className='md:ml-10 ml-7 md:mb-10' >
        <Carousel className='h-56' responsive={responsive}>
    <div className='md:w-56 ' ><img src={w2} alt="" /></div>
    <div className='md:w-56 ' ><img src={w29} alt="" /></div>
    <div className='md:w-56 ' ><img src={w3} alt="" /></div>
    <div className='md:w-56 ' ><img src={w4} alt="" /></div>
    <div className='md:w-56 ' ><img src={w5} alt="" /></div>
    <div className='md:w-56 ' ><img src={w6} alt="" /></div>
    <div className='md:w-56 ' ><img src={w7} alt="" /></div>
    <div className='md:w-56 ' ><img src={w8} alt="" /></div>
    <div className='md:w-56' ><img src={w9} alt="" /></div>
    <div className='md:w-56 ' ><img src={w10} alt="" /></div>
    <div className='md:w-56 ' ><img src={w11} alt="" /></div>
    <div className='md:w-56 ' ><img src={w12} alt="" /></div>
    <div className='md:w-56' ><img src={w13} alt="" /></div>
    <div className='md:w-56 ' ><img src={w14} alt="" /></div>
    <div className='md:w-56 ' ><img src={w15} alt="" /></div>
    <div className='md:w-56 ' ><img src={w16} alt="" /></div>
    <div className='md:w-56 ' ><img src={w16} alt="" /></div>
    <div className='md:w-56 ' ><img src={w17} alt="" /></div>
    <div className='md:w-56 ' ><img src={w18} alt="" /></div>
    <div className='md:w-56 ' ><img src={w19} alt="" /></div>
    <div className='md:w-56 ' ><img src={w20} alt="" /></div>
    <div className='md:w-56 ' ><img src={w21} alt="" /></div>
    <div className='md:w-56 ' ><img src={w22} alt="" /></div>
    <div className='md:w-56 ' ><img src={w23} alt="" /></div>
    <div className='md:w-56 ' ><img src={w24} alt="" /></div>
    <div className='md:w-56 ' ><img src={w25} alt="" /></div>
    <div className='md:w-56 ' ><img src={w26} alt="" /></div>
    <div className='md:w-56 ' ><img src={w27} alt="" /></div>
    <div className='md:w-56 ' ><img src={w28} alt="" /></div>
    <div className='md:w-56 ' ><img src={w29} alt="" /></div>
    <div className='md:w-56 ' ><img src={w30} alt="" /></div>
    <div className='md:w-56 ' ><img src={w31} alt="" /></div>
    <div className='md:w-56 ' ><img src={w32} alt="" /></div>
    <div className='md:w-56 ' ><img src={w33} alt="" /></div>
    <div className='md:w-56 ' ><img src={w34} alt="" /></div>
    <div className='md:w-56 ' ><img src={w35} alt="" /></div>
    <div className='md:w-56 ' ><img src={w36} alt="" /></div>
    <div className='md:w-56 ' ><img src={w37} alt="" /></div>
    
    
    
  </Carousel>
      </div>
    </div>
  )
}

export default IcSlider