import React from 'react'
import MenuBtn from './MenuBtn'
import './Home.css'
import { Link } from 'react-router-dom'
import ImgGallery from './ImgGallery'
import AboutImg from '../assets/images/about-img.jpg'
import ContactImg from '../assets/images/contact-img.webp'
import ContactInfo from './ContactInfo'

function Home() {
    return (
        <div className='home-page'>
            {/* <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
                <div className="container"> */}
                 <header className='mt-5'>
                <div className="container h-100 d-flex align-items-center ">
                    <div className="row">
                        <div className="col-sm-6 d-fllex d-sm-block flex-column align-items-center">
                            <h2 className="mb-0 text-black fw-bold">
                                Welcome To
                            </h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Restuarant</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5 text-uppercase">About Us</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dolore ab maxime veritatis esse, sint architecto magnam porro non reprehenderit.</p>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui laborum autem! Dicta doloremque laborum ex eos assumenda dolorem maxime natus minima magnam et minus nihil illo, error quas ut.</p>
                        <Link to='/about'>
                            <button type="button" className='btn btn-outline-dark btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="main-section py-5 text-light shadow">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favorites</h2>
                    <div className="row mb-5 w-100">
                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5">Food</h3>
                            <ul className="px-0">
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Breakfast</p>
                                    <p className="fs-3 mx-2 text-warning fw-bold">Rs.50</p>
                                </li>
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Lunch</p>
                                    <p className="fs-3 mx-2 text-warning fw-bold">Rs.80</p>
                                </li>
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Dinner</p>
                                    <p className="fs-3 mx-2 text-warning fw-bold">Rs.80</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5">Drinks</h3>
                            <ul className="px-0">
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Coffee</p>
                                    <p className="fs-3 mx-2 text-warning fw-bold">Rs.50</p>
                                </li>
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Juice</p>
                                    <p className="fs-3 mx-2 text-warning fw-bold">Rs.80</p>
                                </li>
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Soft Drinks</p>
                                    <p className="fs-3 mx-2 text-warning fw-bold">Rs.80</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuBtn/>
                </div>
            </div>
            <ImgGallery />
            
            <div className="bg-dark text-light py-5 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
                            <ContactInfo />
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={ContactImg} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
