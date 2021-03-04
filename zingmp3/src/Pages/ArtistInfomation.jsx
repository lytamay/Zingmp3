import React from "react";
import { FaPlay, FaUserAlt } from "react-icons/fa";
import { Link, Route, Router, Switch, useRouteMatch } from "react-router-dom";
import NavbarHead from "../Component/NavbarHead";
import TongQuan from "../Component/TongQuan";
import "../Css/ArtistInfomation.css";
import KhamPha from "./KhamPha";

const ArtistInfomation = (props) => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <NavbarHead />
            <div className="InfoArtist">
                <div className="infoArtistTop">
                    <div className="infoArtistTop_left">
                        <h2>Ten ca si</h2>
                        <div className="btn-group">
                            <button id="phatnhac">
                                <FaPlay className="fas" />
                                PHÁT NHẠC
                            </button>
                            <button id="quantam">
                                <FaUserAlt className="fas" />
                                QUAN TÂM
                            </button>
                            <p>35K QUAN TÂM</p>
                        </div>
                    </div>
                    <div className="infoArtistT_Right">
                        <img
                            src="https://e-cdns-images.dzcdn.net/images/cover/1a8e185e9c26e9b776f54045d8a046be/56x56-000000-80-0-0.jpg"
                            alt=""
                        />
                    </div>
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
