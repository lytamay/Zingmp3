import React from "react";
import "../Css/NavbarLeft.css";
import { Link } from "react-router-dom";
import { FaBeer, FaGithub, FaAddressCard } from "react-icons/fa";
function NavbarLeft() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <h1>logo</h1>
                </div>
                <ul className="navbar-content">
                    <li>
                        <Link to="/">
                            <FaBeer className="narbar-icon" />
                            Khám phá
                        </Link>
                    </li>
                    <li>
                        <Link to="/zingchart">
                            <FaGithub className="narbar-icon" />
                            #zingchart
                        </Link>
                    </li>
                    <li>
                        <Link to="/moiphathanh">
                            <FaAddressCard className="narbar-icon" />
                            Mới Phát Hành
                        </Link>
                    </li>
                    <li>
                        <Link to="/mv">MV</Link>
                    </li>
                    <li>
                        <Link to="/chude">Chủ Đề</Link>
                    </li>
                    <li>
                        <Link to="/top100">Top 100</Link>
                    </li>
                    <li>
                        <Link to="/fanzone">Fanzone</Link>
                    </li>
                </ul>
                <div className="navbar-login">
                    <p>
                        Đăng nhập để khám phá những playlist dành riêng cho
                        chính bạn.
                    </p>
                    <button className="navbar-login-button">ĐĂNG NHẬP</button>
                </div>
            </div>
        </div>
    );
}
export default NavbarLeft;
