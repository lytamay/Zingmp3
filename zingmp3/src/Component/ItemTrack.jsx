import React, { useState } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import "../Css/ItemTrack.css";
import { Link } from "react-router-dom";

const ItemTrack = (props) => {
    let track = props.track;
    let index = props.index;
    let getIndex = props.getIndex;
    const [isPlay, setIsplay] = useState(false);
    let link = `/thong-tin-ca-si/${track.artist.name}`;
    let link1 = `/${track.artist.name}/${track.id}`;
    const reTurnIndex = () => {
        getIndex(index);
    };
    return (
        <div className="wrap-item-track">
            <div className="item-track-left">
                <button onClick={reTurnIndex}>
                    <FaPlay />
                </button>
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
