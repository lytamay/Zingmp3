import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import "../Css/Playlist.css";
import Loading from "./Loading";

const Playlist = (props) => {
    let { album } = props;
    let history = useHistory();
    let link = `/thong-tin-ca-si/${album.artist.name}`;
    const GotoPagePlayAudio = () => {
        history.push(`/album/${album.album.id}`);
    };
    console.log(album);
    return (
        <div className="playlist">
            <div className="playlist-avata" onClick={GotoPagePlayAudio}>
                <img src={album.album.cover_xl} alt="" />
                <div className="layer-background"></div>
                <span onClick={GotoPagePlayAudio}>
                    <FaPlay />
                </span>
            </div>
            <div className="contents">
                <p onClick={GotoPagePlayAudio}>{album.album.title}</p>
                <Link to={link}>{album.artist.name}</Link>
            </div>
        </div>
    );
};

export default Playlist;
