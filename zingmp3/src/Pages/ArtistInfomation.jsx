import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlay, FaUserAlt } from "react-icons/fa";
import { Link, Route, Router, Switch, useRouteMatch } from "react-router-dom";
import NavbarHead from "../Component/NavbarHead";
import SearchMV from "../Component/SearchMV";
import TongQuan from "../Component/TongQuan";
import "../Css/ArtistInfomation.css";
import KhamPha from "./KhamPha";

const ArtistInfomation = (props) => {
    let { path, url } = useRouteMatch();
    let match = useRouteMatch();
    let query = props.location.search;
    let [artist, setArtist] = useState("");
    let [loading, setLoading] = useState(false);
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
                setLoading(true);
                setArtist(data);
            });
    }, [match.params.id]);
    const ShowInformation = (query) => {
        if (query === "") {
            return <TongQuan />;
        } else if (query === "?hoat-dong") {
            return <SearchMV title="Không có hoat dong nào " />;
        } else if (query === "?su-kien") {
            return <SearchMV title="Không có su kien nào " />;
        } else if (query === "?bai-hat") {
            return <SearchMV title="Không có bai hat nào " />;
        } else return <SearchMV title="Không có MV nào " />;
    };
    console.log(artist);
    return (
        <div>
            {loading ? (
                <div>
                    <NavbarHead />
                    <div className="InfoArtist">
                        <div className="infoArtistTop">
                            <div className="infoArtistTop_left">
                                {loading ? <h2>{artist.name}</h2> : ""}
                                <div className="btn-group">
                                    <button id="phatnhac">
                                        <FaPlay className="fas" />
                                        PHÁT NHẠC
                                    </button>
                                    <button id="quantam">
                                        <FaUserAlt className="fas" />
                                        QUAN TÂM
                                    </button>
                                    {loading ? (
                                        <p>{artist.nb_fan} NGƯỜI QUAN TÂM</p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                            <div className="infoArtistT_Right">
                                {loading ? (
                                    <img src={artist.picture_xl} alt="" />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="overise-Info">
                            <ul>
                                <li>
                                    <Link to={`${url}`}>Tổng quan</Link>
                                </li>
                                <li>
                                    <Link to={`${url}?hoat-dong`}>
                                        Hoạt động
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`${url}?su-kien`}>Sự kiện</Link>
                                </li>
                                <li>
                                    <Link to={`${url}?bai-hat`}>Bài hát</Link>
                                </li>
                                <li>
                                    <Link to={`${url}?MV`}>MV</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="resault-search">
                            {ShowInformation(query)}
                        </div>

                        {/* <div className="bottom">
                            <Switch>
                                <Route
                                    exact
                                    path={`${path}`}
                                    component={TongQuan}
                                />
                                {/* <Route
                            path={`${path}/hoat-dong`}
                            component={TongQuan}
                        />
                        <Route path={`${path}/su-kien`} component={TongQuan} />
                        <Route path={`${path}/bai-hat`} component={TongQuan} />
                        <Route path={`${path}/mv`} component={TongQuan} /> */}
                        {/* </Switch> */}
                        {/* </div> */}
                    </div>
                </div>
            ) : (
                <div>loading</div>
            )}
        </div>
    );
};

export default ArtistInfomation;
