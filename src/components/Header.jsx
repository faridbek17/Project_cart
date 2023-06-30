import React from 'react'
import CartIcon from './icons/Carticon'

 function Header({isOpen, setIsOpen}) {
  return (
      <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between h-16">
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
            <h1 className='text-white'>Logo</h1>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button 
        type="button" 
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={() => setIsOpen(!isOpen)}
        >
          <CartIcon/>
        </button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header