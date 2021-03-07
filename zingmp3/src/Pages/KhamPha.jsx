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
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=winner`, {
    //             headers: {
    //                 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //                 "x-rapidapi-key":
    //                     "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a",
    //             },
    //         })
    //         .then((res) => {
    //             let data = res.data.data;
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);
    // console.log(data);
    // let srcArtist = data[2] ? data[2].artist.picture_medium : "";
    const [n, setN] = useState(4);
    const [top100, setTop100] = useState([]);
    const arrTop100 = [
        {
            id: 12233344,
            picture:
                "https://e-cdns-images.dzcdn.net/images/cover/9087b7676d5f37612ee954d4ffc6f082-40d7f93fc4e578c8a111f38381b1ab0b-877f3990f5e0fd0c9bec5fe4ae2cff28-648279dbaad4b98c5a736448ab829599/1000x1000-000000-80-0-0.jpg",
        },
        {
            id: 12223452,
            picture:
                "https://e-cdns-images.dzcdn.net/images/cover/d18facc32866932881581435286e1a77-d3d4858081f461ae87ee5dcdc425d9db-ec3c8ed67427064c70f67e5815b74cef-94827cd4d931d0314e36c576235b7f79/1000x1000-000000-80-0-0.jpg",
        },
        {
            id: 12233344,
            picture:
                "https://e-cdns-images.dzcdn.net/images/cover/1b544d03d731c1dea0ee6b4707fd4ab8/1000x1000-000000-80-0-0.jpg",
        },
        {
            id: 12233344,
            picture:
                "https://e-cdns-images.dzcdn.net/images/cover/5e4b7cc3e633cc96e19bb25131ccc034-d8816818db775112a95d50a461f1b201-10809c8daa25f2a285242a9a4862bdbe-f1f336739e734c705ac83c8e3f819fe9/500x500-000000-80-0-0.jpg",
        },
        {
            id: 12233344,
            picture:
                "https://e-cdns-images.dzcdn.net/images/cover/d167d9a9b2f3f49ed72878a00530415b/1000x1000-000000-80-0-0.jpg",
        },
    ];

    return (
        <div className="khampha">
            <NavbarHead />
            <div className="out-content">
                <Carousel />
                <Chude chude="Playlist Nghe Là Thích" />
                <div className="list-play-list">
                    {arrTop100.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <ItemTop100 id={item.id} src={item.picture} />
                            </div>
                        );
                    })}
                </div>
                <Chude chude="The loai" />
                <div className="the__loai">
                    <div>
                        <TheLoai
                            title="Nhac Au My"
                            url="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/f/6/e/5f6e11fcb5b21d84cea6975fb176fede.jpg"
                        />
                    </div>
                    <div>
                        <TheLoai
                            title="Nhac han"
                            url="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg"
                        />
                    </div>
                    <div>
                        <TheLoai
                            title="Nhac Nhat"
                            url="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/3/8/7/d38751482f31a6c60696eb9fd42255c5.jpg"
                        />
                    </div>
                    <div>
                        <TheLoai
                            title="Nhac tre"
                            url="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/2/0/9/4209684c04f48fae6d482d9743c1fa66.jpg"
                        />
                    </div>
                    <div>
                        <TheLoai
                            title="Nhac trung quoc"
                            url="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/7/8/c/778c8762644496a4ed839a081ee43b7c.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KhamPha;
