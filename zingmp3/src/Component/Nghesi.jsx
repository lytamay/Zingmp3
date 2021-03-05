import React from "react";
import { FaPlay, FaUserPlus } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import "../Css/Nghesi.css";
const Nghesi = (props) => {
    let history = useHistory();
    let artist = props.artist;
    let link = `/thong-tin-ca-si/${artist.artist.name}/${artist.artist.id}`;
    const handelClick = () => {
        history.push(
            `/thong-tin-ca-si/${artist.artist.name}/${artist.artist.id}`
        );
    };
    return (
        <div className="box-artist">
            <div className="box-avata" onClick={handelClick}>
                <img src={artist.artist.picture_xl} alt="" />
                <span>
                    <FaPlay />
                </span>
                <div className="layer-before"></div>
            </div>
            <div className="box-info-artist">
                <Link to={link}>{artist.artist.name}</Link>
                <p>
                    <span>20</span> nguoi quan tam
                </p>
                <button>
                    <span>
                        <FaUserPlus />
                    </span>
                    QUAN TÂM
                </button>
            </div>
        </div>
    );
};

export default Nghesi;
