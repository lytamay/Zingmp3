import React from "react";
import "../Css/Chude.css";

const Chude = (props) => {
    return (
        <div className="chude">
            <p className="chude-content">{props.chude}</p>
        </div>
    );
};

export default Chude;
