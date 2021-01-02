import React from "react";
import {
    FaAudioDescription,
    FaBackward,
    FaForward,
    FaPlay,
    FaPushed,
    FaUps,
    FaVolumeUp,
} from "react-icons/fa";
import "../Css/PlayListMusic.css";

const PlayListMusic = () => {
    const previousSong = () => {};
    const nextSong = () => {};
    const justPlay = () => {};
    const HanderChangeDuration = () => {};
    const autoSwitch = () => {};
    return (
        <div className="boxPlayListMusic">
            <div className="playListMusicLeft">
                <img
                    src="https://cdns-images.dzcdn.net/images/artist/4b83630a754c0bf02c9b02f73c7a9d7e/250x250-000000-80-0-0.jpg"
                    alt=""
                />
                <div className="volume">
                    <p id="volume_show">99</p>
                    <span>
                        <FaVolumeUp />
                    </span>
                    <input type="range" min="0" max="100" value="90" />
                </div>
            </div>
            <div className="playListMusicRight">
                <div className="show_song_no">
                    <p id="present">1</p>
                    <p>/</p>
                    <p id="total"> 5</p>
                </div>

                <p id="title"> title.mp3</p>
                <p id="artist">Artist name</p>
                <div className="middle">
                    <button onClick={previousSong()}>
                        <FaBackward />
                    </button>
                    <button onClick={justPlay()}>
                        <FaPlay />
                    </button>
                    <button onClick={nextSong()}>
                        <FaForward />
                    </button>
                </div>
                <div className="duration">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="0"
                        id="duration-slider"
                        onChange={HanderChangeDuration()}
                    />
                </div>
                <button id="auto" onClick="autoSwitch()">
                    Auto play
                    <FaPlay id="autoplay" />
                </button>
            </div>
        </div>
    );
};

export default PlayListMusic;
