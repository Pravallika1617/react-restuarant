import React from 'react'
import './Menu.css'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import BreakfasrImg from '../assets/images/breakfast.jpg'
import LunchImg from '../assets/images/lunch.jpg'
import DinnerImg from '../assets/images/dinner.jpg'
import DessertImg from '../assets/images/dessert.jpg'

const breakfast = [
    {
        id: 1,
        name: 'Idly',
        price: 'Rs.40'
    },
    {
        id: 2,
        name: 'Dosa',
        price: 'Rs.60'
    },
    {
        id: 3,
        name: 'vada',
        price: 'Rs.50'
    },
    {
        id: 4,
        name: 'Boonda',
        price: 'Rs.45'
    },
    {
        id: 5,
        name: 'poori',
        price: 'Rs.60'
    }
]

const lunch = [
    {
        id: 1,
        name: 'South Indian Tali',
        price: 'Rs.140'
    },
    {
        id: 2,
        name: 'North Indian Tali',
        price: 'Rs.160'
    },
    {
        id: 3,
        name: 'Veg Biryani',
        price: 'Rs.200'
    },
    {
        id: 4,
        name: 'Non-Veg Biryani',
        price: 'Rs.345'
    },
    {
        id: 5,
        name: 'Curd Rice',
        price: 'Rs.100'
    }
]

const dinner = [
    {
        id: 1,
        name: 'Chapathi',
        price: 'Rs.30'
    },
    {
        id: 2,
        name: 'Pulka',
        price: 'Rs.20'
    },
    {
        id: 3,
        name: 'Curries',
        price: 'Rs.150'
    },
    {
        id: 4,
        name: 'Naans',
        price: 'Rs.55'
    },
    {
        id: 5,
        name: 'Rotis',
        price: 'Rs.30'
    }
]

const dessert = [
    {
        id: 1,
        name: 'Gulab Jamun',
        price: 'Rs.50'
    },
    {
        id: 2,
        name: 'Ice Cream',
        price: 'Rs.70'
    },
    {
        id: 3,
        name: 'Double ka Meetha',
        price: 'Rs.60'
    },
    {
        id: 4,
        name: 'Pastry',
        price: 'Rs.55'
    },
    {
        id: 5,
        name: 'Apricot Delight',
        price: 'Rs.80'
    }
]

function Menu() {
    return (
        <div className='menu-page'>
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className="text-light">
                        Menu
                    </h1>
                </div>
            </header>

            <div className="breakfast py-5">
                <div className="container">
                    <h2 className="text-center fs-1 md-4 mb-lg-5 text-uppercase fw-bold text-dark">Breakfast</h2>
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={BreakfasrImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            {breakfast.map((breakfast) => (
                                <div key = {breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody className='d-flex'>
                                            <div className="col-lg-6 col-sm-8"><CardTitle className='text-center fs-4'>
                                                {breakfast.name}
                                            </CardTitle></div>
                                            <div className="col-lg-6"><CardText className='text-center fs-5 fw-bold text-success'>{breakfast.price}</CardText></div>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="lunch bg-dark py-5">
                <div className="container">
                    <h2 className="text-center fs-1 md-4 mb-lg-5 text-uppercase fw-bold text-light">Lunch</h2>
                    <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                            {lunch.map((lunch) => (
                                <div key = {lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <div className="row">
                                        <CardBody className='d-flex' >
                                            <div className="col-lg-6 col-sm-8"><CardTitle className='text-center fs-4'>
                                                {lunch.name}
                                            </CardTitle></div>
                                            <div className="col-lg-6">
                                            <CardText className='text-center fs-5 fw-bold text-warning'>{lunch.price}</CardText>
                                            </div>
                                        </CardBody>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="dinner py-5">
                <div className="container">
                    <h2 className="text-center fs-1 md-4 mb-lg-5 text-uppercase fw-bold text-dark">dinner</h2>
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            {dinner.map((dinner) => (
                                <div key = {dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody className='d-flex'>
                                            <div className="col-lg-6 col-sm-8"><CardTitle className='text-center fs-4'>
                                                {dinner.name}
                                            </CardTitle></div>
                                            <div className="col-lg-6"><CardText className='text-center fs-5 fw-bold text-success'>{dinner.price}</CardText></div>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="dessert bg-dark py-5">
                <div className="container">
                    <h2 className="text-center fs-1 md-4 mb-lg-5 text-uppercase fw-bold text-light">Dessert</h2>
                    <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                            {dessert.map((dessert) => (
                                <div key = {dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <div className="row">
                                        <CardBody className='d-flex' >
                                            <div className="col-lg-6 col-sm-8"><CardTitle className='text-center fs-4'>
                                                {dessert.name}
                                            </CardTitle></div>
                                            <div className="col-lg-6">
                                            <CardText className='text-center fs-5 fw-bold text-warning'>{dessert.price}</CardText>
                                            </div>
                                        </CardBody>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
