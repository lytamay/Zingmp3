import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import {
    useParams,
    Link,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import NavbarHead from "../Component/NavbarHead";
import SeacrhTrackItem from "../Component/SeacrhTrackItem";
import SearcAll from "../Component/SearcAll";
import SearchArtist from "../Component/SearchArtist";
import SearchMV from "../Component/SearchMV";
import SearchPlaylist from "../Component/SearchPlaylist";
import "../Css/SearchTrack.css";
const SearchTrack = (props) => {
    const [searchTrack, setSearchTrack] = useState([]);
    const [searchArtist, setSearchArtist] = useState([]);
    const [searchPlaylist, setSearchPlaylist] = useState([]);
    const [searchMv, setSeachMv] = useState([]);
    let { name } = useParams();
    let { path, url } = useRouteMatch();
    let query = props.location.search;
    useEffect(() => {
        const casi = [];
        const playlist = [];
        const mv = [];
        axios
            .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`, {
                headers: {
                    "x-rapidapi-key":
                        "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                },
            })
            .then((res) => {
                let data = res.data.data;
                setSearchTrack(data);
                for (let i in data) {
                    if (data[i].artist.name.match(/[name]/g) !== null) {
                        const check = casi.find(
                            (casi) => casi.artist.name === data[i].artist.name
                        );
                        if (!check) {
                            casi.push(data[i]);
                        }
                    }
                    if (data[i].album.title.match(/[name]/g) !== null) {
                        const check = playlist.find(
                            (playlist) =>
                                playlist.album.title === data[i].album.title
                        );
                        if (!check) {
                            playlist.push(data[i]);
                        }
                    }
                }
                setSearchArtist(casi);
                setSearchPlaylist(playlist);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [name]);
    const ShowSearch = (query) => {
        if (query === "" || query === "?all") {
            return (
                <SearcAll
                    track={searchTrack}
                    album={searchPlaylist}
                    artist={searchArtist}
                />
            );
        } else if (query === "?baihat") {
            return <SeacrhTrackItem track={searchTrack} />;
        } else if (query === "?playlist&album") {
            return <SearchPlaylist playlist={searchPlaylist} />;
        } else if (query === "?nghesi") {
            return <SearchArtist artist={searchArtist} />;
        } else return <SearchMV title="Không tìm thấy mv nào !" />;
    };
    return (
        <div className="search">
            <NavbarHead />
            <div className="search-content">
                <ul>
                    <li>
                        <h2>Kết Quả Tìm Kiếm</h2>
                    </li>
                    <li
                        className="test"
                        style={{ borderBottom: "3px", borderColor: "red" }}
                    >
                        <Link to={`${url}?all`}>Tất cả</Link>
                    </li>
                    <li>
                        <Link to={`${url}?baihat`}>
                            Bài hát{" "}
                            <span className="countTrack">
                                {searchTrack.length}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}?playlist&album`}>
                            Playlist/Album
                            <span className="countTrack">
                                {searchPlaylist.length}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}?nghesi`}>
                            Nghệ sĩ
                            <span className="countTrack">
                                {searchArtist.length}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}?mv`}>MV</Link>
                    </li>
                </ul>
                <div className="resault-search">{ShowSearch(query)}</div>
            </div>
        </div>
    );
};

export default SearchTrack;
