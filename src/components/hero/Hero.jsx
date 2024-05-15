import React from 'react'
import './Hero.css'
import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero_text'>
            <p className='hero_text1'>Mobile</p>
            <p className='hero_text2'>Backcover</p>
            <p className='hero_text3'>Tempered Glass</p>
            <Link className='nav_link' href={'/shop'}>
                <button>Shop all !</button>
            </Link>
        </div>
        <Image />
    </div>
  )
}

export default Hero