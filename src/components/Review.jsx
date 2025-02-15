import React from 'react'
import {Card,CardBody,CardText,CardFooter,CardTitle} from 'react-bootstrap'
import './Review.css'
import Person1 from '../assets/images/person1.avif'
import Person2 from '../assets/images/person2.avif'
import Person3 from '../assets/images/person3.avif'
import Person4 from '../assets/images/person4.jpg'


function Review() {
    return (
        <div className='reviews-section container'>
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto et, aliquid numquam quam excepturi quis similique ipsum rem libero? 
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Person1} className='img-fluid rounded-circle mx-3 shadow' alt="" />
                            <CardTitle className='text-success'>John Mike</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto et, aliquid numquam quam excepturi quis similique ipsum rem libero? 
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Person2} className='img-fluid rounded-circle mx-3 shadow' alt="" />
                            <CardTitle className='text-success'>Mahesh</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto et, aliquid numquam quam excepturi quis similique ipsum rem libero? 
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Person3} className='img-fluid rounded-circle mx-3 shadow' alt="" />
                            <CardTitle className='text-success'>Radha</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className='h-100 shadow'>
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto et, aliquid numquam quam excepturi quis similique ipsum rem libero? 
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className='d-flex align-items-center'>
                            <img src={Person4} className='img-fluid rounded-circle mx-3 shadow' alt="" />
                            <CardTitle className='text-success'>Rama</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Review
