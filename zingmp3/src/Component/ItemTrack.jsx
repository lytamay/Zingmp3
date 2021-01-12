import React from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import "../Css/ItemTrack.css";
import { Link } from "react-router-dom";

const ItemTrack = (props) => {
    let track = props.track;
    let link = `/thong-tin-ca-si/${track.artist.name}`;
    return (
        <div className="wrap-item-track">
            <div className="item-track-left">
                <button>
                    <FaPlay />
                </button>
                {/* anh album */}
                <img src={track.album.cover_medium} alt={props.tenAlbum} />
                <div className="item-track-left-title">
                    <p>{track.title}</p>
                    <Link to={link}>{track.artist.name}</Link>
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
