import React from 'react'

function Navbar() {
  const arise = ()=> {
    const comp = document.getElementById('target')
    if (comp) {
      comp.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div className='flex items-center bg-[#3B945E] shadow-lg text-[#F2F2F2] left-0 right-0 top-2  py-3 justify-between px-3 md:px-10 ' >
      <div className='md:text-3xl text-2xl font-kalnia-400' >
        SA Company
      </div>
      <div>
        <li className='list-none text-1xl font-poppins' >
            <button>Home</button>
            <button onClick={arise} className='md:px-5 px-2' >Shop</button>
        </li>
      </div>
    </div>
  )
}

export default Navbar
