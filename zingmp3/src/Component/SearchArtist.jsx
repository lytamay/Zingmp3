import React from "react";
import Nghesi from "./Nghesi";
import "../Css/SearchArtist.css";
const SearchArtist = (props) => {
    let artist = props.artist;
    console.log(artist);
    return (
        <div className="box-search-artist">
            <p>Nghe si</p>
            <div className="list-search-artist">
                {artist.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <Nghesi artist={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchArtist;
