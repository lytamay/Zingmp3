import React from "react";
import "../Css/NavbarHead.css";
import { Link } from "react-router-dom";
import {
    FaArrowAltCircleLeft,
    FaArrowLeft,
    FaArrowRight,
    FaCog,
    FaFilter,
    FaRoad,
    FaSearch,
    FaUber,
    FaUpload,
    FaUser,
} from "react-icons/fa";
const NavbarHead = () => {
    return (
        <div className="wraper-navbar-header">
            <ul>
                <li>
                    <Link>
                        <FaArrowLeft className="fa fas-ArrowLeft" />
                    </Link>
                </li>
                <li>
                    <Link>
                        <FaArrowRight className="fa fas-ArrowRight" />
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="box-search">
                            <span>
                                <FaSearch className="fa fas-Search" />
                            </span>
                            <input placeholder="Nhap ten bai hat, nghe si hoac MV" />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link>
                        <h1 className="zma2020">ZMA 2020</h1>
                    </Link>
                </li>
                <li>
                    <Link>
                        <button className="btn-gopy">Gop y</button>
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="out-fas">
                            <FaFilter className="fa fas-Filer" />
                        </div>
                        {/* <p className="fas-Filer-tootip">chu de</p> */}
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="out-fas">
                            <FaUpload className="fa fas-upload" />
                        </div>
                        {/* <p className="fas-upload-tootip">tai len</p> */}
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="out-fas">
                            <FaCog className="fa fas-cog" />
                            {/* <p>Cai dat</p> */}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="out-user">
                            <FaUser className="fa fas-user" />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavbarHead;
