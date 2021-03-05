import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlay, FaUserAlt } from "react-icons/fa";
import { Link, Route, Router, Switch, useRouteMatch } from "react-router-dom";
import NavbarHead from "../Component/NavbarHead";
import TongQuan from "../Component/TongQuan";
import "../Css/ArtistInfomation.css";
import KhamPha from "./KhamPha";

const ArtistInfomation = (props) => {
    let { path, url } = useRouteMatch();
    let match = useRouteMatch();
    let [artist, setArtist] = useState();
    useEffect(() => {
        axios
            .get(
                `https://deezerdevs-deezer.p.rapidapi.com/artist/${match.params.id}`,
                {
                    headers: {
                        "x-rapidapi-key":
                            "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    },
                }
            )
            .then((res) => {
                let data = res.data;
                setArtist(data);
            });
    }, [match.params.id]);
    console.log(artist);
    return (
        <div>
            <NavbarHead />
            <div className="InfoArtist">
                <div className="infoArtistTop">
                    <div className="infoArtistTop_left">
                        {/* {artist.name !== null ? <h2>{artist.name}</h2> : ""} */}
                        <div className="btn-group">
                            <button id="phatnhac">
                                <FaPlay className="fas" />
                                PHÁT NHẠC
                            </button>
                            <button id="quantam">
                                <FaUserAlt className="fas" />
                                QUAN TÂM
                            </button>
                            {artist.nb_fan !== null ? (
                                <p>{artist.nb_fan} NGƯỜI QUAN TÂM</p>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    {/* <div className="infoArtistT_Right">
                        {artist.picture_xl !== null ? (
                            <img src={artist.picture_xl} alt="" />
                        ) : (
                            ""
                        )}
                    </div> */}
                </div>
                <div className="overise-Info">
                    <ul>
                        <li>
                            <Link to={`${url}`}>Tổng quan</Link>
                        </li>
                        <li>
                            <Link to={`${url}/hoat-dong`}>Hoạt động</Link>
                        </li>
                        <li>
                            <Link to={`${url}/su-kien`}>Sự kiện</Link>
                        </li>
                        <li>
                            <Link to={`${url}/bai-hat`}>Bài hát</Link>
                        </li>
                        <li>
                            <Link to={`${url}/MV`}>MV</Link>
                        </li>
                    </ul>
                </div>

                <div className="bottom">
                    <Switch>
                        <Route exact path={`${path}`} component={TongQuan} />
                        {/* <Route
                            path={`${path}/hoat-dong`}
                            component={TongQuan}
                        />
                        <Route path={`${path}/su-kien`} component={TongQuan} />
                        <Route path={`${path}/bai-hat`} component={TongQuan} />
                        <Route path={`${path}/mv`} component={TongQuan} /> */}
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default ArtistInfomation;
