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
    let trackList = props.trackList;
    const [isPlaying, setIsPlaying] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [volumeVal, setVolumeVal] = useState(30);
    const [currentTime, setCurrentTime] = useState(0);
    const [isVolumePlay, setIsVolumePlay] = useState(true);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    let range = document.querySelector("#duration_slider");
    let rangeTime = document.querySelector("#current_time");
    let voLume = document.querySelector("#volume");
    if (trackList[currentTrackIndex] == null) {
        return "";
    }
    const previousSong = () => {
        let Aud = document.getElementsByClassName("audio-player")[0];
        let index = trackList.findIndex(
            (item) => (item = trackList[currentTrackIndex])
        );
        if (index == 0) {
            setCurrentTrackIndex(0);
        } else {
            setCurrentTrackIndex(index--);
        }
    };
    const nextSong = () => {
        let Aud = document.getElementsByClassName("audio-player")[0];
        let index = trackList.findIndex(
            (item) => (item = trackList[currentTrackIndex])
        );
        if (index == trackList.length - 1) {
            setCurrentTrackIndex(0);
        } else {
            setCurrentTrackIndex(index++);
        }
    };
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
            range.max = Aud.ended;
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
    const HieuUngAnh = () => {
        const imgTrack = document.querySelector(".img-track");
        if (isPlaying) {
            // imgTrack.classList.add("imgTogle");
            setInterval(() => {
                imgTrack.classList.toggle("imgTogle");
            }, 1000);
        } else {
            clearInterval();
        }
    };
    HieuUngAnh();
    const HanderChangeDuration = () => {
        let Aud = document.getElementsByClassName("audio-player")[0];
        const SongAudio = new Audio();
        let length = SongAudio.duration;
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
            Aud.volume = 0;
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
                <img
                    className="img-track"
                    src={trackList[currentTrackIndex].album.cover_xl}
                    alt=""
                />
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
                <p id="title">{trackList[currentTrackIndex].title} </p>
                <p id="artist">{trackList[currentTrackIndex].artist.name}</p>
                <div className="middle">
                    <button onClick={previousSong}>
                        <FaBackward />
                    </button>
                    <button onClick={justPlay}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button onClick={nextSong}>
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
                    <source src={trackList[currentTrackIndex].preview} />
                </audio>
            </div>
        </div>
    );
};

export default PlayListMusic;
