import React from "react";
import "../Css/NavbarLeft.css";
import { Link, useHistory } from "react-router-dom";
import {
    FaGithub,
    FaAddressCard,
    FaBullseye,
    FaChartLine,
    FaCompactDisc,
    FaHeadphones,
    FaHeadset,
    FaListOl,
    FaWizardsOfTheCoast,
} from "react-icons/fa";
import test from "../Image/customLogo.png";

function NavbarLeft() {
    const history = useHistory();
    const formLogIn = () => {
        history.push("/login");
    };
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img style={{ height: "55px" }} src={test} alt="" />
                </div>
                <ul className="navbar-content">
                    <li>
                        <Link to="/khampha">
                            <FaBullseye className="narbar-icon" />
                            Khám phá
                        </Link>
                    </li>
                    <li>
                        <Link to="/zingchart">
                            <FaChartLine className="narbar-icon" />
                            #zingchart
                        </Link>
                    </li>
                    <li>
                        <Link to="/moiphathanh">
                            <FaCompactDisc className="narbar-icon" />
                            Mới Phát Hành
                        </Link>
                    </li>
                    <li>
                        <Link to="/mv">
                            <FaHeadphones className="narbar-icon" />
                            MV
                        </Link>
                    </li>
                    <li>
                        <Link to="/chude">
                            <FaHeadset className="narbar-icon" />
                            Chủ Đề
                        </Link>
                    </li>
                    <li>
                        <Link to="/top100">
                            <FaListOl className="narbar-icon" />
                            Top 100
                        </Link>
                    </li>
                    <li>
                        <Link to="/fanzone">
                            <FaWizardsOfTheCoast className="narbar-icon" />
                            Fanzone
                        </Link>
                    </li>
                </ul>
                <div className="navbar-login">
                    <p>
                        Đăng nhập để khám phá những playlist dành riêng cho
                        chính bạn.
                    </p>
                    <button onClick={formLogIn} className="navbar-login-button">
                        ĐĂNG NHẬP
                    </button>
                </div>
            </div>
        </div>
    );
}
export default NavbarLeft;
