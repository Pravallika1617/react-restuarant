import React from 'react'
import './About.css'
import AboutChef1 from '../assets/images/chef1.avif'
import AboutChef2 from '../assets/images/chef2.webp'
import ImgGallery from './ImgGallery'
import Review from './Review'

function About() {
    return (
        <div className='about-page'>
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className="container my-5">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio illum eaque repellat. Praesentium saepe doloribus itaque, mollitia, recusandae quae nam vitae debitis illum neque, omnis voluptas officiis temporibus porro quidem sint quo doloremque? Nam quod aliquam voluptate inventore nostrum, nobis vero assumenda ratione error, non dolor aspernatur ut, maxime modi?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex autem eligendi perspiciatis, voluptas ipsum voluptates, amet explicabo itaque consequatur reprehenderit illum, accusamus ipsa quia veniam deserunt aut! Earum omnis laudantium dolore recusandae sint aspernatur sapiente voluptatum quam? Ex quas laudantium ipsum reiciendis, voluptas excepturi aliquam voluptates debitis deserunt perferendis accusamus esse. Odio, assumenda quia modi eveniet similique illo totam dolor unde necessitatibus, excepturi consequuntur enim voluptatem est, ea soluta deserunt rerum. Blanditiis consectetur assumenda iste magnam beatae qui minima nostrum.</p>

                <div className="row">
                    <div className="col-lg-6">
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus sequi quisquam voluptatibus ducimus accusantium animi? Ab ex sint, eveniet est saepe odit error fugit sequi dolorem, repellendus magni quam asperiores repellat quibusdam nobis quae aliquid in laboriosam architecto eos eius iure! Tempore, minima asperiores tenetur a possimus vitae? Fugiat dicta atque quos laudantium vero perspiciatis provident numquam corrupti, velit dolorum deserunt earum laborum quis ad. Pariatur tenetur deserunt nemo animi illo placeat assumenda vero voluptates mollitia possimus officia quam at maiores temporibus dolorum, cum corporis quia recusandae totam et?</p>
            </div>

            <div className="bg-dark text-light">
                <ImgGallery />
            </div>

            <div className="my-5">
            <Review />
            </div>
        </div>
    )
}

export default About
