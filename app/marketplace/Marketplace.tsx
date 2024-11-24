'use client'
import React, { useState } from 'react'
import Header from '@/app/_components/Header'
import ProductCard from '@/app/_components/ProductCard'
import '../globals.css'

type Product = {
  category: string
  subcategory: string
  productName: string
  creatorName: string
  price: string
}

const products: Product[] = [
  {
    category: 'Avatars',
    subcategory: 'Human-like',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Avatars',
    subcategory: 'Anthro & Furry',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Avatars',
    subcategory: 'Robot & Cyborgs',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Fashion',
    subcategory: 'Clothes',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Fashion',
    subcategory: 'Accessories',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Avatars',
    subcategory: 'Human-like',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Avatars',
    subcategory: 'Anthro & Furry',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Avatars',
    subcategory: 'Robot & Cyborgs',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Fashion',
    subcategory: 'Clothes',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Fashion',
    subcategory: 'Accessories',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Avatars',
    subcategory: 'Human-like',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Avatars',
    subcategory: 'Anthro & Furry',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Avatars',
    subcategory: 'Robot & Cyborgs',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Fashion',
    subcategory: 'Clothes',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
  {
    category: 'Fashion',
    subcategory: 'Accessories',
    productName: 'Product name',
    creatorName: 'Creator name',
    price: '10.00',
  },
]

const Marketplace: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  const handleFilter = (searchText: string, selectedCategory: string) => {
    const filtered = products.filter((product) => {
      const matchesText = product.productName
        .toLowerCase()
        .includes(searchText.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' ||
        product.category === selectedCategory ||
        product.subcategory === selectedCategory

      return matchesText && matchesCategory
    })

    setFilteredProducts(filtered)
  }

  return (
    <div className="bg-dark min-h-screen">
      {/* Pass the filter handler to Header */}
      <Header onFilter={handleFilter} />
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="text-[32px] font-bold mt-4">
          Parent category&gt;Child category
        </div>
        <div className="grid grid-cols-5 gap-x-6 gap-y-8 py-6">
          {filteredProducts.length ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))
          ) : (
            <div>No product found.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Marketplace
