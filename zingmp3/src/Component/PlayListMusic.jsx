import React, { useEffect, useState } from "react";
import {
    FaAdn,
    FaAudioDescription,
    FaBackward,
    FaForward,
    FaPause,
    FaPlay,
    FaPushed,
    FaRedo,
    FaUps,
    FaVolumeMute,
    FaVolumeUp,
} from "react-icons/fa";
import "../Css/PlayListMusic.css";

const PlayListMusic = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [volumeVal, setVolumeVal] = useState(30);
    const [currentTime, setCurrentTime] = useState(0);
    const [isVolumePlay, setIsVolumePlay] = useState(true);
    const [duration, setDuration] = useState(0);
    let range = document.querySelector("#duration_slider");
    let rangeTime = document.querySelector("#current_time");
    let voLume = document.querySelector("#volume");
    let track = props.track;
    if (track == null) {
        return "";
    }
    const previousSong = () => {};
    const nextSong = () => {};
    const justPlay = () => {
        let Aud = document.getElementsByClassName("audio-player")[0];
        if (isPlaying) {
            setIsPlaying(false);
            Aud.pause();
        } else {
            setIsPlaying(true);
            Aud.play();
        }
        range.addEventListener("change", () => {
            Aud.currentTime = range.value;
        });
        Aud.addEventListener("timeupdate", () => {
            range.value = Aud.currentTime;
        });
        let interval = setInterval(() => {
            let time = Math.round(Aud.currentTime);
            if (time < 10) {
                document.getElementById(
                    "current_time"
                ).innerHTML = `00:0${time}`;
            } else if (time < 60 && time > 9) {
                document.getElementById(
                    "current_time"
                ).innerHTML = `00:${time}`;
            } else if (time == 60) {
                document.getElementById("current_time").innerHTML = `01:00`;
                // } else if (time > 60) {
                //     let hour =handeVolum = time - (hour * 3600 + minute * 60);
                //     if (hour < 10 && minute < 10) {
                //         document.getElementById(
                //             "current_time"
                //         ).innerHTML = `0${hour}:0${minute}`;
                //     } else if (hour > 10 && minute < 10) {
                //         document.getElementById(
                //             "current_time"
                //         ).innerHTML = `${hour}:0${minute}`;
                //     } else if (hour < 10 && minute > 10) {
                //         document.getElementById(
                //             "current_time"
                //         ).innerHTML = `0${hour}:${minute}`;
                //     } else if (minute < 10 && second < 10) {
                //         document.getElementById(
                //             "current_time"
                //         ).innerHTML = `0${minute}:0${second}`;
                //     } else if (minute < 10 && second > 10) {
                //         document.getElementById(
                //     isVolumePlay    document.getElementById(
                //             "current_time"
                //         ).innerHTML = `${minute}:0${second}`;
                //     } else {
                //         document.getElementById(
                //             "current_time"
                //         ).innerHTML = `${minute}:${second}`;
                //     }
            } else {
                document.getElementById(
                    "current_time"
                ).innerHTML = `00:${time}`;
            }
        }, 1000);
        if (!isPlaying || Aud.ended) {
            clearInterval(interval);
        }
    };
    const HanderChangeDuration = () => {
        let Aud = document.getElementsByClassName("audio-player")[0];
        let length = Aud.duration;
    };
    const autoSwitch = () => {
        let Aud = document.getElementsByClassName("audio-player")[0];
        if (isAutoPlay) {
            Aud.autoplay = true;
            setIsAutoPlay(false);
            setIsPlaying(true);
            Aud.load();
        } else {
            Aud.autoplay = false;
            setIsAutoPlay(true);
            setIsPlaying(false);
            Aud.load();
        }
    };
    const CheckVolume = () => {
        let Aud = document.getElementsByClassName("audio-player")[0];
        if (isVolumePlay) {
            setIsVolumePlay(false);
            setVolumeVal(0);
            voLume.value = 0;
        } else {
            setVolumeVal(Aud.volume * 100);
            setIsVolumePlay(true);
            voLume.value = Aud.volume * 100;
        }
    };
    const HandeVolum = (e) => {
        e.preventDefault();
        let Aud = document.getElementsByClassName("audio-player")[0];
        Aud.volume = e.target.value / 100;
        setVolumeVal(e.target.value);
    };
    return (
        <div className="boxPlayListMusic">
            <div className="playListMusicLeft">
                <img src={track.album.cover_small} alt="" />
                <div className="volume">
                    <p id="volume_show">{volumeVal}</p>
                    <span onClick={CheckVolume}>
                        {isVolumePlay ? <FaVolumeUp /> : <FaVolumeMute />}
                    </span>
                    <input
                        id="volume"
                        type="range"
                        min="0"
                        max="100"
                        onChange={HandeVolum}
                    />
                </div>
            </div>
            <div className="playListMusicRight">
                <div className="show_song_no">
                    <p id="present">1</p>
                    <p>/</p>
                    <p id="total"> 5</p>
                </div>

                <p id="title">{track.title} </p>
                <p id="artist">{track.artist.name}</p>
                <div className="middle">
                    <button onClick={previousSong()}>
                        <FaBackward />
                    </button>
                    <button onClick={justPlay}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button onClick={nextSong()}>
                        <FaForward />
                    </button>
                </div>
                <div className="duration">
                    <p
                        id="current_time"
                        style={{ fontSize: "12px", color: "gray" }}
                    >
                        00:00
                    </p>
                    <input
                        type="range"
                        min="0"
                        id="duration_slider"
                        onChange={HanderChangeDuration}
                    />
                </div>
                <button id="auto" onClick={autoSwitch}>
                    {isAutoPlay
                        ? `Auto ${(<FaPause />)}`
                        : `Reload ${(<FaRedo />)}`}
                </button>
            </div>
            <div>
                <audio className="audio-player">
                    <source src={track.preview} />
                </audio>
            </div>
        </div>
    );
};

export default PlayListMusic;
