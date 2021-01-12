import React, { useState } from "react";
import "../Css/Uilogo.css";
import { BrowserRouter, useHistory } from "react-router-dom";
function Uilogo(props) {
    let history = useHistory();
    const [logoState, setLogoState] = useState(true);
    const [titleState, setTitleState] = useState(false);
    const [btnStateForwarkPageHome, setBtnStateForwarkPageHome] = useState(
        true
    );
    function handelStateContent() {
        setTimeout(function () {
            setLogoState(false);
        }, 4000);
    }
    function handelStateTitle() {
        setTimeout(function () {
            setTitleState(true);
        }, 10000);
    }
    handelStateContent();
    handelStateTitle();
    const Style = {
        visibility: logoState ? "visible" : "hidden",
    };
    const StyleTitle = {
        opacity: titleState ? "100" : "0",
    };

    const handClick = () => {
        setBtnStateForwarkPageHome(false);
        // history.push("/home");
        props.onClick(btnStateForwarkPageHome);
    };
    return (
        <div className="container">
            <ul className="logo" style={Style}>
                <li className="logo-charector zing zing1">Z</li>
                <li className="logo-charector zing zing2">i</li>
                <li className="logo-charector zing zing3">n</li>
                <li className="logo-charector zing zing4">g</li>
                <li className="logo-charector mp3">mp3</li>
            </ul>
            <div className="content">
                <h1>xin chao zingmp3</h1>
                <h4>thoa suc voi mp3</h4>
            </div>
            <div className="title" style={StyleTitle}>
                <div className="title-content">Viet noi dung o day</div>
                <button className="btn-nghe-nhac" onClick={handClick}>
                    Nghe nhac
                </button>
            </div>
        </div>
    );
}
export default Uilogo;
