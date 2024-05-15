"use client"
import React from 'react'
import './Products.css'
import Image from 'next/image'
import phone from '@/assets/phone.svg'

function Products() {
    const forPro = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    let products = forPro.map(el => (
        <div className='pro_card' style={{width: 250}}>
            <div>
                <Image src={phone} className='pro_card_img'/>
            </div>
            <h3>iPhone 13 Pro - Transparent</h3>
            <p>LKR 799</p>
        </div>
    ))
  return (
    <div className='pro'>
        <h2>Shop All Products</h2>
        <div>
            {products}
        </div>
    </div>
  )
}

export default Products