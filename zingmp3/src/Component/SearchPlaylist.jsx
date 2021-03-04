import React from "react";
import Playlist from "./Playlist";
import "../Css/SearchPlaylist.css";

const SearchPlaylist = (props) => {
    let album = props.playlist;
    console.log(album);
    return (
        <div className="box-list-playlist">
            <p>Playlis/ Album</p>
            <div className="list-playlist">
                {album.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <Playlist album={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchPlaylist;
