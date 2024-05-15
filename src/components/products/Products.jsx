"use client"
import React from 'react'
import './Products.css'
import Image from 'next/image'
import phone from '@/assets/phone.svg'

function Products({forPro,title}) {

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
    <>
    <div className='pro'>
        <h2>{title}</h2>
        <div>
            {products}
        </div>
    </div>
    </>
  )
}

export default Products