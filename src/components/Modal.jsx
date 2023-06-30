import React from 'react'
import CloseIcon from './icons/Closeicon'

export default function Modal({isOpen, setIsOpen, cartProducts, removeToCart}) {
  return (
<div className={`relative z-10 ease-in-out duration-500 opacity-${isOpen ? 100 : 0} ${isOpen ? 'visible' : 'invisible'}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition ease-in-out duration-200 sm:duration-200 translate-x-${isOpen ? '0' : 'full'}`}>
  
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button 
                  type="button" 
                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="sr-only">Close panel</span>
                        <CloseIcon/>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">

                    {
                        cartProducts.map(item => {
                            return(
                                <li key={item.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src={item.img} alt={item.name} className="h-full w-full object-cover object-center/ "/>
                                    </div>
            
                                    <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a href="#">{item.name}</a>
                                        </h3>
                                        <p className="ml-4">${item.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {item.qty}</p>
            
                                        <div className="flex">
                                        <button 
                                            type="button" 
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={() => removeToCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                            )
                        })
                    }


                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</div>
</div>
  )
}
