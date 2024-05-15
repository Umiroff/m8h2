import React from 'react'
import './Navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { FaSearch } from "react-icons/fa";


function Navbar() {
  return (
    <>
    <div className='nav'>
        <ul>
            <Link href={'/'} className='nav_link'>
                <li>Home</li>
            </Link>
            <Link href={'/shop'} className='nav_link'>
                <li>Shop All</li>
            </Link>
            <Link href={'/blog'} className='nav_link'>
                <li>Blog</li>
            </Link>
        </ul>

        <Link href={'/'} className='nav_link'>
          <Image src={logo}/>
        </Link>

        <div>
          <Link href={'/about'} className='nav_link'>
            <p>About us</p>
          </Link>
          <form action="">
            <input type="text" placeholder='Search Product'/>
            <FaSearch/>
          </form>
        </div>
        
    </div>
    </>
  )
}

export default Navbar