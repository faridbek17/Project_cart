import React from 'react'

function Product({product, addToCard}) {
  return (
    <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img src={product.img} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
    </div>
    <div className="mt-4 flex justify-between">
        <div>
            <h3 className="text-sm text-gray-700">
                <button>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {product.name}
                </button>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
         <p className="text-sm font-medium text-gray-900">${product.price}</p>
    </div>
        <div className="mt-6">
            <button
                  className="flex items-center relative z-10 justify-center rounded-md border border-transparent w-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  onClick={() => addToCard(product)}
                >
                  Add To Cart
                </button>
        </div>
</div>
  )
}

export default Product
