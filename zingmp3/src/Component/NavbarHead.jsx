import React, { useEffect, useState } from "react";
import "../Css/NavbarHead.css";
import { Link, useHistory } from "react-router-dom";
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
import axios from "axios";
const NavbarHead = () => {
    let history = useHistory();
    const [searchTrack, setSearchTrack] = useState("");
    const [itemSearchState, setItemSearchState] = useState(false);
    const [valueSearch, setValueSearch] = useState("");
    const [itemSeacrh, setItemSearch] = useState([
        "anh ơi anh ở lai",
        "đom đóm",
        "hoa hải đường",
        "kẹo bông gòn",
        "chẳng thể tìm được em",
    ]);
    useEffect(() => {
        axios
            .get(
                `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTrack}`,
                {
                    headers: {
                        "x-rapidapi-key":
                            "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    },
                }
            )
            .then((res) => {
                const data = res.data.data;
                const arrTam = [];
                for (let i = 0; i < 10; i++) {
                    arrTam.push(data[i].title);
                }
                setItemSearch(arrTam);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [searchTrack]);
    const handSearch = (e) => {
        const { value } = e.target;
        setValueSearch(value);
        setTimeout(() => {
            setSearchTrack(e.target.value);
        }, 500);
    };

    const filterSeacrh = () => {
        setItemSearchState(true);
    };
    const getItemSearch = (item) => {
        setValueSearch(item);
        setItemSearchState(false);
    };

    const goToSearchPage = (e) => {
        if (e.key === "Enter") {
            setItemSearchState(false);
            setValueSearch("");
            setItemSearch([
                "anh ơi anh ở lai",
                "đom đóm",
                "hoa hải đường",
                "kẹo bông gòn",
                "chẳng thể tìm được em",
            ]);
            history.push(`/search/${valueSearch}`);
        }
    };
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
                            <input
                                type="text"
                                value={valueSearch}
                                onClick={filterSeacrh}
                                onChange={handSearch}
                                onKeyDown={goToSearchPage}
                                placeholder="Nhap ten bai hat, nghe si hoac MV"
                            />
                        </div>

                        {itemSearchState && (
                            <div className="search-item">
                                {itemSeacrh.map((item, index) => {
                                    return (
                                        <p
                                            key={index}
                                            onClick={() => getItemSearch(item)}
                                        >
                                            {item}
                                        </p>
                                    );
                                })}
                            </div>
                        )}
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
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="out-fas">
                            <FaUpload className="fa fas-upload" />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="out-fas">
                            <FaCog className="fa fas-cog" />
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
