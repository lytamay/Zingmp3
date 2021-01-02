import React, { useEffect, useState } from "react";
import Carousel from "../Component/Carousel";
import ItemTop100 from "../Component/ItemTop100";
import NavbarHead from "../Component/NavbarHead";
import "../Css/KhamPha.css";
import axios from "axios";
import Chude from "../Component/Chude";
import { Row, Col, Slider } from "antd";
import TheLoai from "../Component/TheLoai";

const KhamPha = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=winner`, {
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key":
                        "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a",
                },
            })
            .then((res) => {
                let data = res.data.data;
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    let srcArtist = data[2] ? data[2].artist.picture_medium : "";

    return (
        <div className="khampha">
            <NavbarHead />
            <div className="out-content">
                <Carousel />
                <Chude chude="Playlist Nghe Là Thích" />

                <Row>
                    <Col span={6}>
                        <ItemTop100 src={srcArtist} />
                    </Col>
                    <Col span={6}>
                        <ItemTop100 src={srcArtist} />
                    </Col>
                    <Col span={6}>
                        <ItemTop100 src={srcArtist} />
                    </Col>
                    <Col span={6}>
                        <ItemTop100 src={srcArtist} />
                    </Col>
                </Row>
                <TheLoai />
            </div>
        </div>
    );
};

export default KhamPha;
