import React, {Suspense, lazy } from "react";
import styled from '@emotion/styled'
import slide1 from '../../images/slide1.jpg'
import slide2 from '../../images/slide2.jpg'
import slide3 from '../../images/slide3.jpg'
import slide4 from '../../images/slide4.jpg'
import slide5 from '../../images/slide5.jpg'
import slide6 from '../../images/slide6.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../common/Button'

// const Carousel = require('react-responsive-carousel').Carousel;

// const slides = [slide1, slide2, slide3, slide4, slide5, slide6 ]
const slides = [{
    image: slide1,
    text: "Hello I'm text one"
},{
    image: slide2,
    text: "Hello I'm text two"
},{
    image: slide3,
    text: "Hello I'm text three"
},{
    image: slide4,
    text: "Hello I'm text four"
},{
    image: slide5,
    text: "Hello I'm text five"
},{
    image: slide6,
    text: "Hello I'm text six"
}
]

const SimpleSlider = () => {
        return (
            <Container>
                <div className="overlay">
                <div className="primary-text">
                <h3>Create your FREE account</h3>
                <Button primary={true}>SignUp</Button>
                </div>
                <div className="secondary-text">
                    <h4>You can buy all kinds of shit. We usually sell it more expensive than most other places but if you're a baller, then you'll buy it anyways.</h4>
                </div>
                </div>
        <Suspense fallback={<div>Loading...</div>}>
        <Carousel
            autoPlay
            infiniteLoop
            emulateTouch
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            transition={3000}
        >
            {slides.map(({image, text}) => (
                <>
                    <img src={image}/>
                    <p className="legend">{text}</p>
                </>
                )
            )}

        </Carousel>
            </Suspense>
         </Container>
        );
}

    export default SimpleSlider

    const Container = styled.div`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        .overlay {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            z-index: 2000;
            right: 10%;
            top: 10%;
            background:#28A745;
            width: 500px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            .primary-text{
                display: flex;
                flex-direction: row;
                margin-bottom: 15px;
                justify-content: space-evenly;
                width: 100%;
            h3 {
                color: white;
                font-size: 2.5rem;
            }
            }
            .secondary-text {
                color: white;
                font-size: 2rem;
                line-height: 1.5;
            }
        }
    `