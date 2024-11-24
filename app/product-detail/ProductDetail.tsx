'use client'

import React from 'react'
import Header from '../_components/Header'

const ProductDetail: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen py-20 px-4">
        {/* Product Details Container */}
        <div className="max-w-3xl mx-auto bg-darkBg rounded-lg shadow-lg p-6">
          {/* Product Image and Basic Info */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Product Image */}
            <div className="flex-1">
              <div className="rounded-lg w-full h-[200px] bg-darkBgHover" />
            </div>

            {/* Basic Product Info */}
            <div className="flex-1 pt-2">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Product Name
                </h1>
                <p className="text-md font-semibold text-secondary">
                  Fashion &gt; Clothes
                </p>
                <p className="text-xl font-semibold text-primary mt-2">
                  $10.00
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Created by{' '}
                <span className="font-semibold cursor-pointer">John Doe</span>
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-primary">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Description and Reviews */}
          <div className="mt-8">
            {/* Product Details */}
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800">
                Product Details
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                This is an amazing product that offers the best value for your
                money. It&apos;s carefully crafted and has received excellent
                feedback from customers.
              </p>
            </div>

            {/* Other User Reviews */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                User Reviews{' '}
                <span className="font-normal text-sm text-gray-400">
                  ★★★★★ (5.0)
                </span>
              </h2>
              <div className="mt-4">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-sm text-gray-600 mt-1">
                    &quot;Absolutely loved this product. Highly recommend!&quot;
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-800">Michael Johnson</p>
                  <p className="text-sm text-gray-600 mt-1">
                    &quot;Good quality, but delivery was delayed.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
