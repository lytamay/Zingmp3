import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemTrack from "../Component/ItemTrack";
import Loading from "../Component/Loading";
import NavbarHead from "../Component/NavbarHead";
import PlayListMusic from "../Component/PlayListMusic";
import RunMusic from "../Component/RunMusic";
import "../Css/PlayList100.css";

const PlayList100 = (props) => {
    let id = props.id;
    const [playListState, setPlayListState] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [status, setStatus] = useState("");
    useEffect(() => {
        axios
            .get("https://deezerdevs-deezer.p.rapidapi.com/playlist/12233344", {
                headers: {
                    "x-rapidapi-key":
                        "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                },
            })
            .then((res) => {
                setPlayListState(res.data.tracks.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!playListState) {
        return "";
    }
    let list100 = [];
    for (let i = 0; i < 100; i++) {
        list100.push(playListState[i]);
    }
    const getCurrentIndex = (status) => {
        if (
            (status === "next" && currentIndex < 100) ||
            (status === "next" && currentIndex > 0)
        ) {
            let index = currentIndex;
            index = index + 1;
            setCurrentIndex(index);
        } else if (status === "pre" && currentIndex > 0) {
            let index = currentIndex;
            index = index - 1;
            setCurrentIndex(index);
        }
    };
    const getIndex = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div className="PlayList100">
            <NavbarHead />
            <div className="PlayList100-OutContent">
                {/* <PlayListMusic trackList={list100} /> */}
                <RunMusic
                    track={list100[currentIndex]}
                    getStatusIndex={getCurrentIndex}
                />
                <ul className="PlayList100-Track-List">
                    {list100.map((track, index) => {
                        if (track == null) {
                            return <Loading />;
                        } else {
                            return (
                                <li key={track.id}>
                                    <ItemTrack
                                        track={track}
                                        index={index}
                                        getIndex={getIndex}
                                    />
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PlayList100;
