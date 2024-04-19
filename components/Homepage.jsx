import React from 'react'
import img7 from '../assets/img7.jpg'
import ic from '../assets/ic.jpg'

function Homepage() {
  const arise = ()=> {
    const comp = document.getElementById('target')
    if (comp) {
      comp.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div className='' >
  <div className="md:flex md:justify-between items-center md:mt-10 mt-6 mb-10 ">
      <div className="md:w-1/2 p-8">
        <h1 className="text-5xl md:text-6xl font-bold">High Quality <span className='text-[#57Ba98]' >Mobile IC'S</span> And Watches</h1>
        <p className='mt-4 ml-2' >SGA Company in Delhi offers top-quality watches and mobile ICs sourced from reputable manufacturers. Whether you need a stylish timepiece or reliable mobile components, SGA ensures excellence in both fashion and technology.</p>
        <button onClick={arise}  className='border-2  md:ml-2 border-black hover:text-white hover:bg-[#57Ba98] hover:border-white outline-0 duration-200 px-3 py-2 rounded-lg mt-4 font-bold text-[#57Ba98]' >BUY NOW!</button>
      </div>
      <div className="md;w-1/2 md:mr-20 flex flex-col justify-center items-center">
        <img
          className="w-96 border-[#57Ba98] border-4 rounded-lg mb-4"
          src={img7}
          alt="Image 1"
        />
        <img
          className="w-96 border-[#57Ba98] border-4 rounded-lg "
          src={ic}
          alt="Image 2"
        />
      </div>
    </div>
    </div>
  )
}

export default Homepage