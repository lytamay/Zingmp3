import React from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import "../Css/ItemTrack.css";
import { Link } from "react-router-dom";

const ItemTrack = (props) => {
    return (
        <div className="wrap-item-track">
            <div className="item-track-left">
                <button>
                    <FaPlay />
                </button>
                <img
                    src="https://cdns-images.dzcdn.net/images/artist/4b83630a754c0bf02c9b02f73c7a9d7e/250x250-000000-80-0-0.jpg"
                    alt={props.tenAlbum}
                />
                <div className="item-track-left-title">
                    <p>Ten bai hat</p>
                    <Link>Ten ca si</Link>
                </div>
            </div>
            <div className="item-track-midel">03:18</div>
            <div className="item-track-right">
                <button>
                    <FaHeart />
                </button>
                <button>...</button>
            </div>
        </div>
    );
};

export default ItemTrack;
