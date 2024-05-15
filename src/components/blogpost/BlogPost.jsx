import React from 'react'
import './BlogPost.css'
import Image from 'next/image'
import blogImg from '@/assets/blogImg.svg'

function BlogPost() {
  return (
    <>
    <div className='bp'>
        <h2>Blog Posts</h2>
        <div>
            <div className='bp_t'>
                <div>
                    <h3>Tempered Glass</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illo animi ipsa nemo accusantium, numquam distinctio libero quaerat modi deserunt ad odio. Numquam atque dolore ducimus est aut quod dolorum, quo, odio tenetur eos mollitia assumenda voluptatum corrupti. Quibusdam, distinctio facere aliquid voluptas dicta cupiditate illo, consectetur quia explicabo totam velit harum ab officiis placeat earum, quo saepe provident officia iste nihil est nam excepturi consequatur? Hic, temporibus consectetur distinctio unde reprehenderit eaque, omnis, ducimus tenetur eveniet earum ratione numquam vitae atque minus beatae reiciendis accusamus obcaecati deleniti? Corrupti exercitationem quod ad atque, odio laboriosam. Expedita, minima ratione. Laborum, dolorem?</p>
                </div>
                <Image src={blogImg}/>
            </div>
        </div>
        <div>
            <div className='bp_t'>
                <Image src={blogImg} />
                <div >
                    <h3>Back cover</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illo animi ipsa nemo accusantium, numquam distinctio libero quaerat modi deserunt ad odio. Numquam atque dolore ducimus est aut quod dolorum, quo, odio tenetur eos mollitia assumenda voluptatum corrupti. Quibusdam, distinctio facere aliquid voluptas dicta cupiditate illo, consectetur quia explicabo totam velit harum ab officiis placeat earum, quo saepe provident officia iste nihil est nam excepturi consequatur? Hic, temporibus consectetur distinctio unde reprehenderit eaque, omnis, ducimus tenetur eveniet earum ratione numquam vitae atque minus beatae reiciendis accusamus obcaecati deleniti? Corrupti exercitationem quod ad atque, odio laboriosam. Expedita, minima ratione. Laborum, dolorem?</p>
                </div>
            </div>
        </div>
        <div>
            <div className='bp_t'>
                <div style={{width:800}}>
                    <h3>Tempered Glass</h3>
                    <p style={{marginBottom: 50}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illo animi ipsa nemo accusantium, numquam distinctio libero quaerat modi deserunt ad odio. Numquam atque dolore ducimus est aut quod dolorum, quo, odio tenetur eos mollitia assumenda voluptatum corrupti. Quibusdam, distinctio facere aliquid voluptas dicta cupiditate illo, consectetur quia explicabo totam velit harum ab officiis placeat earum, quo saepe provident officia iste nihil est nam excepturi consequatur? Hic, temporibus consectetur distinctio unde reprehenderit eaque, omnis, ducimus tenetur eveniet earum ratione numquam vitae atque minus beatae reiciendis accusamus obcaecati deleniti? Corrupti exercitationem quod ad atque, odio laboriosam. Expedita, minima ratione. Laborum, dolorem?</p>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogPost