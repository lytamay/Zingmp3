import React from "react";
import { useHistory } from "react-router";
import "../Css/TheLoai.css";
const TheLoai = (props) => {
    let title = props.title;
    let url = props.url;
    let id = props.id;
    let history = useHistory();
    const pushID = () => {
        history.push(`/album/${id}`);
    };
    return (
        <div className="wrap-theloai" onClick={pushID}>
            <img src={url} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default TheLoai;
