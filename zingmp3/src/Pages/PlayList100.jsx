import React from "react";
import ItemTrack from "../Component/ItemTrack";
import NavbarHead from "../Component/NavbarHead";
import PlayListMusic from "../Component/PlayListMusic";
import "../Css/PlayList100.css";

const PlayList100 = () => {
    return (
        <div className="PlayList100">
            <NavbarHead />
            <div className="PlayList100-OutContent">
                <PlayListMusic />
                <ItemTrack />
            </div>
        </div>
    );
};

export default PlayList100;
