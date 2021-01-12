import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemTrack from "../Component/ItemTrack";
import Loading from "../Component/Loading";
import NavbarHead from "../Component/NavbarHead";
import PlayListMusic from "../Component/PlayListMusic";
import "../Css/PlayList100.css";

const PlayList100 = (props) => {
    let id = props.id;
    const [playListState, setPlayListState] = useState([]);
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
    return (
        <div className="PlayList100">
            <NavbarHead />
            <div className="PlayList100-OutContent">
                <PlayListMusic track={list100[0]} />
                <ul className="PlayList100-Track-List">
                    {list100.map((track, index) => {
                        if (track == null) {
                            return <Loading />;
                        } else {
                            return (
                                <li key={track.id}>
                                    <ItemTrack track={track} />
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
