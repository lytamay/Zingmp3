import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import "../Css/Carousel.css";
import { findDOMNode } from "react-dom";
import { Carousel } from "antd";

const Carasoul = () => {
    const [x, setx] = useState(0);
    const carouselArr = [
        <CarouselItem card_number="1" transform={x} />,
        <CarouselItem card_number="2" transform={x} />,
        <CarouselItem card_number="3" transform={x} />,
    ];
    const arr = [1, 2, 3, 4];
    const goPrevious = () => {
        x === 0 ? setx(-100 * (carouselArr.length - 1)) : setx(x - 100);
    };
    const goNext = () => {
        x === -100 * (carouselArr.length - 1) ? setx(0) : setx(x + 100);
    };
    return (
        <div className="wrap-carousel">
            <button className="carousel-btn-pre" onClick={goPrevious}>
                Pre
            </button>
            <button className="carousel-btn-next" onClick={goNext}>
                Next
            </button>
            <div className="carosel-container">
                {carouselArr.map((item, index) => {
                    console.log(x);
                    return (
                        <div
                            key={index}
                            className="itemSlider"
                            style={{ transform: `translate(${x}%)` }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carasoul;
