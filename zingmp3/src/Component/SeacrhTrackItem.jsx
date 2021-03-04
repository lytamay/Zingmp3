import React from "react";
import Loading from "./Loading";
import ItemTrack from "./ItemTrack";
import "../Css/SearchTrackItem.css";
import { useParams } from "react-router-dom";
const SeacrhTrackItem = (props) => {
    let track = props.track;
    return (
        <div className="search-track">
            <p>Bài hát</p>
            <div>
                {track.map((item, index) => {
                    if (item == null) {
                        return <Loading />;
                    } else {
                        return (
                            <div key={item.id}>
                                <ItemTrack track={item} />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default SeacrhTrackItem;
