"use client"
import Products from '@/components/products/Products'
import React from 'react'

function Shop() {
  const forPro = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  const title = 'Shop All Products'
  return (
    <div>
      <Products forPro={forPro} title={title}/>
    </div>
  )
}

export default Shop