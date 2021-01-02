import React from "react";
import "../Css/ItemTop100.css";
import { Link } from "react-router-dom";
import { FaHeart, FaPlay, FaSearch } from "react-icons/fa";
const ItemTop100 = (props) => {
    return (
        <div className="box-itemTop100">
            <div className="box-itemTop100-content">
                <img src={props.src} alt="khong co" />
                <div className="box-itemTop100-content-title">
                    <p>top</p>
                    <h1> 100 </h1>
                    <h2> TRU TINH</h2>
                </div>
                <div className="box-itemTop100-icon">
                    <ul>
                        <li>
                            <Link>
                                <FaHeart className=" fas-chooseItem" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaPlay className=" fas-chooseItem" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaSearch className=" fas-chooseItem" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box-itemTop100-detail">
                <Link>Top 100 bai hat nhac tre hay nhat</Link>
                {/* <p className="top100-tooltip">
                    Top 100 bai hat nhac tre hay nhat
                </p> */}
            </div>
        </div>
    );
};

export default ItemTop100;
