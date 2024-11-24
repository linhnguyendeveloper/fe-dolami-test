'use client'

import arrowRight from '@/public/assets/images/arrow-right.svg'
import cartImg from '@/public/assets/images/cart.svg'
import filterImg from '@/public/assets/images/filter.svg'
import languageImg from '@/public/assets/images/language.svg'
import logo from '@/public/assets/images/logo.svg'
import searchImg from '@/public/assets/images/search.svg'
import userImg from '@/public/assets/images/user.svg'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  onFilter?: (searchText: string, selectedCategory: string) => void
}

const Header: React.FC<HeaderProps> = ({ onFilter }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeInput, setActiveInput] = useState<'keyword' | 'category' | null>(
    null
  )
  const [selectedCategory, setSelectedCategory] = useState<string>('All') // Combines both roles
  const [searchText, setSearchText] = useState<string>('')
  const mergeInputRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const router = useRouter()

  const categories: { [key: string]: string[] } = {
    Avatars: [
      'Human-like',
      'Anthro & Furry',
      'Robot & Cyborgs',
      'Others',
      'All in Avatars',
    ],
    Fashion: ['Clothes', 'Accessories', 'All in Fashion'],
    All: [],
  }

  const handleKeywordInputClick = () => {
    setActiveInput('keyword')
    setShowDropdown(false)
  }

  const handleCategoryInputClick = () => {
    setActiveInput('category')
    setShowDropdown(!showDropdown)
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category) // Sets the selected value
    if (categories[category].length === 0) {
      setShowDropdown(false) // Close dropdown if no subcategories
    }
  }

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedCategory(subcategory) // Sets the selected subcategory
    setShowDropdown(false) // Close dropdown
  }

  const activeStyle = (type: 'keyword' | 'category') =>
    activeInput === type ? '!bg-darkBg' : ''

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (onFilter) onFilter(searchText, selectedCategory)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        mergeInputRef.current &&
        !mergeInputRef.current.contains(event.target as Node)
      ) {
        setActiveInput(null)
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="bg-dark text-white py-4 border-b border-darkBorder h-[80px]">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto">
        <Image
          src={logo}
          alt="logo"
          className="ml-[-8px] cursor-pointer"
          onClick={() => router.push('/')}
        />
        {onFilter && (
          <div className="flex items-center gap-2">
            <div
              className="grid grid-cols-[1fr_1px_1fr] rounded-3xl bg-lightGray relative w-[529px] h-[48px]"
              ref={mergeInputRef}
            >
              {/* Keyword Input */}
              <div
                onClick={handleKeywordInputClick}
                className={`pl-7 flex flex-col justify-center cursor-pointer text-sm bg-transparent text-gray rounded-3xl ${activeStyle(
                  'keyword'
                )}`}
              >
                {activeInput !== 'keyword' && (
                  <div className="text-xs font-semibold">Keyword</div>
                )}
                <input
                  type="text"
                  placeholder={activeInput === 'keyword' ? '' : 'Search here'}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="bg-transparent text-gray placeholder-secondary focus:outline-none"
                />
              </div>

              {/* Divider */}
              <div
                className={`w-[1px] my-auto h-[80%] ${
                  activeInput ? '' : 'bg-darkBorder'
                }`}
              />

              {/* Category Input */}
              <div
                className={`pl-7 pr-1 text-sm cursor-pointer bg-transparent flex items-center justify-between rounded-3xl text-gray ${activeStyle(
                  'category'
                )}`}
                onClick={handleCategoryInputClick}
              >
                <span className="flex-grow text-sm">
                  <div className="text-xs font-semibold">Category</div>
                  {selectedCategory}
                </span>
                <button
                  className="bg-red-500 rounded-full h-[40px] w-[40px] flex items-center justify-center"
                  onClick={(e) => handleSearch(e)}
                >
                  <Image src={searchImg} alt="search" />
                </button>
              </div>

              {/* Dropdown */}
              {showDropdown && (
                <div
                  className="absolute top-[58px] right-0 bg-darkBg text-white mt-1 rounded-3xl shadow-lg flex w-[444px] h-[352px] z-50 px-2 py-3"
                  ref={dropdownRef}
                >
                  {/* Main Categories */}
                  <div className="w-1/2 border-r border-darkBorder">
                    {Object.keys(categories).map((category) => (
                      <div
                        key={category}
                        className={`px-3 py-2 hover:bg-darkBgHover rounded-full cursor-pointer mr-1 flex justify-between items-center my-1 ${
                          selectedCategory === category ? 'bg-darkBgHover' : ''
                        }`}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                        <Image
                          src={arrowRight}
                          alt="arrow"
                          width={0}
                          height={0}
                          className={
                            categories[category].length
                              ? 'w-[7px] h-[12px]'
                              : 'hidden'
                          }
                        />
                      </div>
                    ))}
                  </div>

                  {/* Subcategories */}
                  <div className="w-1/2">
                    {selectedCategory &&
                      categories[selectedCategory]?.map((subcategory) => (
                        <div
                          key={subcategory}
                          className={`px-4 py-2 hover:bg-darkBgHover cursor-pointer rounded-full ml-1 my-1 ${
                            selectedCategory === subcategory
                              ? 'bg-darkBgHover'
                              : ''
                          }`}
                          onClick={() => handleSubcategorySelect(subcategory)}
                        >
                          {subcategory}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <Image src={filterImg} alt="filter" className="cursor-pointer" />
          </div>
        )}

        <div className="flex items-center gap-6">
          <div>List your creation</div>
          <Image src={languageImg} alt="language" className="cursor-pointer" />
          <Image src={userImg} alt="user" className="cursor-pointer" />
          <Image src={cartImg} alt="cart" className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Header
