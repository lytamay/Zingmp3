import React, { useState } from "react";
import "../Css/RunMusic.css";
import {
    FaAccusoft,
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaDownload,
    FaEllipsisH,
    FaHeadphonesAlt,
    FaHeart,
    FaHeartbeat,
    FaShare,
    FaShareAlt,
    FaSync,
    FaUserAltSlash,
} from "react-icons/fa";
const RunMusic = (props) => {
    let { track } = props;
    let getStatusIndex = props.getStatusIndex;
    const [state, setState] = useState();
    const [checkPouse, setCheckPuse] = useState(false);
    if (!track) {
        return "";
    }
    const reload = () => {
        let music = document.getElementsByClassName("control-audio")[0];
        music.load();
        music.play();
    };
    const nextTrack = () => {
        getStatusIndex("next");
    };
    const preTrack = () => {
        getStatusIndex("pre");
    };
    return (
        <div>
            <div className="wrap-box">
                <div className="wrap-play-music">
                    <div className="item-left">
                        <img
                            className="imgAnimation"
                            src={track.album.cover_xl}
                            alt={track.title}
                        />
                    </div>
                    <div className="item-right">
                        <img
                            src={track.album.cover_xl}
                            alt={track.title}
                            className="rotate360"
                        />
                        <p>{track.title}</p>
                        <p>{track.artist.name}</p>
                        <p>Khong co loi bai hat</p>
                    </div>
                </div>
                <div className="box-controls">
                    <span>
                        <FaAngleDoubleLeft
                            className="fa fa1"
                            onClick={preTrack}
                        />
                        <FaSync className="fa fa2" onClick={reload} />
                        <FaAngleDoubleRight
                            className="fa fa3"
                            onClick={nextTrack}
                        />
                    </span>
                    <audio
                        className="control-audio"
                        controls
                        src={track.preview}
                    ></audio>
                </div>
            </div>
            <div className="wrap-bottom">
                <div className="object-left">
                    <img src={track.album.cover_xl} alt={track.title} />
                    <div className="object-left-content">
                        <p>{track.title}</p>
                        <div>
                            <span>
                                <FaHeadphonesAlt />
                            </span>
                            {track.rank}
                        </div>
                    </div>
                </div>
                <div className="object-right">
                    <div>
                        <span>
                            <FaHeart /> Thêm vào
                        </span>
                    </div>
                    <div>
                        <span>
                            <FaDownload /> Tải Playlist
                        </span>
                    </div>
                    <div>
                        <span>
                            <FaShareAlt /> Chia sẻ
                        </span>
                    </div>
                    <div>
                        <span>
                            <FaEllipsisH />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RunMusic;
