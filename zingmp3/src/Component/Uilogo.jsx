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
                <div className="title-content">
                    <div className="number1">
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/8/c/e/c/8cec9e661246a074dd4a95ea5cbc249f.jpg"
                            alt=""
                        />
                    </div>
                    <div className="number2">
                        <img
                            src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/3/e/3/73e3579e5b92a3c487100ec1938a4818.jpg"
                            alt=""
                        />
                    </div>
                    <div className="number3">
                        <img
                            src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/b/0/5/bb050a57d1864650601b89ef0da99737.jpg"
                            alt=""
                        />
                    </div>
                    <div className="number4">
                        <img
                            src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/erik.png"
                            alt=""
                        />
                    </div>
                    <div className="number5">
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/c/a/4/a/ca4aac4111ceb729955f2e1b6a93b20d.jpg"
                            alt=""
                        />
                    </div>
                    <div className="number6">
                        <img
                            src="https://photo-zmp3.zadn.vn/banner/f/6/e/d/f6edcf3b82b439e6dacaa1fd8f1a0eed.jpg"
                            alt=""
                        />
                    </div>
                    <div className="number7">
                        <img
                            src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"
                            alt=""
                        />
                    </div>
                    <div className="number8">
                        <img
                            src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/f/6/e/5f6e11fcb5b21d84cea6975fb176fede.jpg"
                            alt=""
                        />
                    </div>
                    <p className="PR1">Nghe nhạc</p>
                    <p className="PR2">Trải nghiệm</p>
                    <p className="PR3">Nhạc hot</p>
                    <p className="PR4">MV ca nhạc hay nhất</p>
                </div>
                <button className="btn-nghe-nhac" onClick={handClick}>
                    Nghe nhac
                </button>
            </div>
        </div>
    );
}
export default Uilogo;
