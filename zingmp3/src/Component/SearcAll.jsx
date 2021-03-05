import React, { useEffect, useState } from "react";
import "../Css/SearchAll.css";
import Loading from "../Component/Loading";
import ItemTrack from "../Component/ItemTrack";
import { FaAngleRight, FaUps } from "react-icons/fa";
import Playlist from "./Playlist";
import Nghesi from "./Nghesi";
import { useHistory, useRouteMatch } from "react-router-dom";

const SearcAll = (props) => {
    let history = useHistory();
    let { url } = useRouteMatch();
    const [n, setN] = useState(4);
    const [albumArr, setAlbumArr] = useState([]);
    const [artistArr, setArtistArr] = useState([]);
    const [trackArr, setTrackArr] = useState([]);
    let track = props.track;
    let artist = props.artist;
    let album = props.album;
    let tam = [];
    let casi = [];
    let baihat = [];
    useEffect(() => {
        if (!track || !artist || !album) {
            return "";
        }
        if (album.length != 0) {
            for (let i = 0; i < n; i++) {
                tam.push(album[i]);
            }
            setAlbumArr(tam);
        }
        if (artist.length != 0) {
            for (let i = 0; i < n; i++) {
                casi.push(artist[i]);
            }
            setArtistArr(casi);
        }
        if (track.length != 0) {
            for (let i = 0; i < 5; i++) {
                baihat.push(artist[i]);
            }
            setTrackArr(baihat);
        }
    }, [track, artist, album]);
    const PassComponetTrack = () => {
        history.push(`${url}?baihat`);
    };
    const PassComponetPlaylist = () => {
        history.push(`${url}?playlist&album`);
    };
    const PassComponetArtist = () => {
        history.push(`${url}?nghesi`);
    };
    const PassComponetMv = () => {
        history.push(`${url}?mv`);
    };
    return (
        <div>
            <div className="box-search-content">
                <div className="theme-title" onClick={PassComponetTrack}>
                    <p>Bài Hát</p>
                    <span>
                        <FaAngleRight />
                    </span>
                </div>
                <div className="bai-hat">
                    {trackArr.map((item, index) => {
                        if (item == null) {
                            return <Loading />;
                        } else {
                            return (
                                <div key={item.id}>
                                    <ItemTrack track={item} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className="box-search-content">
                <div className="theme-title" onClick={PassComponetPlaylist}>
                    <p>Playlist/Album</p>
                    <span>
                        <FaAngleRight />
                    </span>
                </div>
                <div className="box-playlist">
                    {albumArr.length > 0 &&
                        albumArr.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <Playlist album={item} />
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="box-search-content">
                <div className="theme-title" onClick={PassComponetMv}>
                    <p>MV </p>
                    <span>
                        <FaAngleRight />
                    </span>
                </div>
            </div>
            <div className="box-search-content">
                <div className="theme-title" onClick={PassComponetArtist}>
                    <p>Nghệ Sĩ </p>
                    <span>
                        <FaAngleRight />
                    </span>
                </div>
                <div className="nghe-si">
                    {artistArr.map((item, index) => {
                        if (item == null) {
                            return <Loading />;
                        } else {
                            return (
                                <div key={item.id}>
                                    <Nghesi artist={item} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearcAll;
