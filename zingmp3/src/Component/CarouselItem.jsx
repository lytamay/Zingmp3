import React from "react";
import "../Css/CarouselItem.css";

const CarouselItem = (props) => {
    return <div className="carousel-item">{props.card_number}</div>;
};

export default CarouselItem;
