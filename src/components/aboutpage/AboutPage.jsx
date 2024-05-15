import Image from 'next/image'
import React from 'react'
import aboutImg from '@/assets/aboutImg.svg'

function AboutPage() {
  return (
    <div>
        <Image src={aboutImg} style={{marginBottom: 50,marginLeft:50}}/>
        <p style={{fontSize: 14, marginLeft:50,marginBottom:50}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, autem. Vel rerum rem natus consectetur quis deleniti blanditiis accusantium recusandae sequi dicta ipsa, libero autem aliquam ipsum placeat maxime temporibus fugiat animi inventore. Explicabo vero quae qui obcaecati debitis optio. Earum accusantium obcaecati saepe error provident pariatur, distinctio placeat, voluptates velit non unde enim! Nobis ducimus at dolores eveniet aperiam quisquam laborum temporibus iusto veritatis veniam, porro sint, rem, recusandae doloribus vero fuga sequi esse. Natus et temporibus facere eligendi quo nisi aut ex fugiat debitis. Sint, rem. Odit laboriosam fuga veniam, suscipit porro eveniet accusantium iusto id cum qui?</p>
        <h3 style={{fontSize: 24, marginLeft:50,marginBottom:50}}>Price Strategy</h3>
        <p style={{fontSize: 14, marginLeft:50,marginBottom:50}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, autem. Vel rerum rem natus consectetur quis deleniti blanditiis accusantium recusandae sequi dicta ipsa, libero autem aliquam ipsum placeat maxime temporibus fugiat animi inventore. Explicabo vero quae qui obcaecati debitis optio. Earum accusantium obcaecati saepe error provident pariatur, distinctio placeat, voluptates velit non unde enim! Nobis ducimus at dolores eveniet aperiam quisquam laborum temporibus iusto veritatis veniam, porro sint, rem, recusandae doloribus vero fuga sequi esse. Natus et temporibus facere eligendi quo nisi aut ex fugiat debitis. Sint, rem. Odit laboriosam fuga veniam, suscipit porro eveniet accusantium iusto id cum qui?</p>
        <p style={{fontSize: 14, marginLeft:50,marginBottom:50}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, autem. Vel rerum rem natus consectetur quis deleniti blanditiis accusantium recusandae sequi dicta ipsa, libero autem aliquam ipsum placeat maxime temporibus fugiat animi inventore. Explicabo vero quae qui obcaecati debitis optio. Earum accusantium obcaecati saepe error provident pariatur, distinctio placeat, voluptates velit non unde enim! Nobis ducimus at dolores eveniet aperiam quisquam laborum temporibus iusto veritatis veniam, porro sint, rem, recusandae doloribus vero fuga sequi esse. Natus et temporibus facere eligendi quo nisi aut ex fugiat debitis. Sint, rem. Odit laboriosam fuga veniam, suscipit porro eveniet accusantium iusto id cum qui?</p>
    </div>
  )
}

export default AboutPage