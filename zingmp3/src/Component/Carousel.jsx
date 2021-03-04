import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import "../Css/Carousel.css";
import { findDOMNode } from "react-dom";
import { Carousel } from "antd";

const Carasoul = () => {
    // const [x, setx] = useState(0);
    // const carouselArr = [
    //     <CarouselItem card_number="1" transform={x} />,
    //     <CarouselItem card_number="2" transform={x} />,
    //     <CarouselItem card_number="3" transform={x} />,
    //     <CarouselItem card_number="4" transform={x} />,
    //     <CarouselItem card_number="5" transform={x} />,
    //     <CarouselItem card_number="6" transform={x} />,
    //     <CarouselItem card_number="7" transform={x} />,
    //     <CarouselItem card_number="8" transform={x} />,
    //     <CarouselItem card_number="9" transform={x} />,
    //     <CarouselItem card_number="10" transform={x} />,
    // ];
    // const arr = [1, 2, 3, 4];
    // const goPrevious = () => {
    //     x === 0 ? setx(-100 * (carouselArr.length - 1)) : setx(x - 100);
    // };
    // const goNext = () => {
    //     x === -100 * (carouselArr.length - 1) ? setx(0) : setx(x + 100);
    // };
    return (
        <div className="wrap-carousel">
            <div className="content-carousel">
                <div className="detail-carousel">
                    <figure>
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/3/b/1/2/3b12e835e8f9e6abd9d5aa8f7052776a.jpg"
                            alt=""
                        />
                    </figure>
                    <figure>
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/0/0/5/0/0050a149e8e4970d52621499aab1e700.jpg"
                            alt=""
                        />
                    </figure>
                    <figure>
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/d/8/5/7/d8576595e5a86c9c1d093a3775d9f53a.jpg"
                            alt=""
                        />
                    </figure>
                    <figure>
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/b/a/d/b/badba32c66140cf5cb8a75976cbde041.jpg"
                            alt=""
                        />
                    </figure>
                    <figure>
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/1/5/7/f/157f205b10f9c437feb54528ebe947df.jpg"
                            alt=""
                        />
                    </figure>
                    <figure>
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/3/d/8/d/3d8d4b05e89116711768fa10f58bc7db.jpg"
                            alt=""
                        />
                    </figure>
                    <figure>
                        <img
                            src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"
                            alt=""
                        />
                    </figure>
                    <figure>
                        <img
                            src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg"
                            alt=""
                        />
                    </figure>
                </div>
            </div>
        </div>
        // <div className="wrap-carousel">
        //     <button className="carousel-btn-pre" onClick={goPrevious}>
        //         Pre
        //     </button>
        //     <button className="carousel-btn-next" onClick={goNext}>
        //         Next
        //     </button>
        //     <div className="carosel-container">
        //         {carouselArr.map((item, index) => {
        //             console.log(x);
        //             return (
        //                 <div
        //                     key={index}
        //                     className="itemSlider"
        //                     style={{ transform: `translate(${x}%)` }}
        //                 >
        //                     {item}
        //                 </div>
        //             );
        //         })}
        //     </div>
        // </div>
    );
};

export default Carasoul;
