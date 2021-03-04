import React from "react";
import { useParams } from "react-router-dom";
import NavbarHead from "./NavbarHead";
import "../Css/TongQuan.css";

const TongQuan = () => {
    let { id } = useParams();
    return (
        <div className="tong-quan">
            <p>Bai Hat Noi Bat</p>
            <div className="bai-hat-noi-bat">
                <div className="bai-hat-noi-bat-left"></div>
                <div className="bai-hat-noi-bat-right"></div>
            </div>
            <p>Single</p>
            <p>Playlist</p>
            <p>Bạn Có Thể Thích</p>
        </div>
    );
};

export default TongQuan;
