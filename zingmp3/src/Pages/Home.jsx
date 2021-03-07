import React from "react";
import NavbarLeft from "../Component/NavbarLeft";
import ZingChart from "./ZingChart";
import "../Css/Home.css";
import KhamPha from "./KhamPha";
import MoiPhatHanh from "./MoiPhatHanh";
import ArtistInfomation from "./ArtistInfomation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlayList100 from "./PlayList100";
import SearchTrack from "../Pages/SearchTrack";
import BaiHat from "./BaiHat";
import LogIn from "./LogIn";

function Home() {
    return (
        <div className="wraper">
            <div className="left">
                <NavbarLeft />
            </div>
            <div className="right">
                <div className="right-box">
                    <Switch>
                        <Route exact path="/" component={KhamPha} />
                        <Route exact path="/khampha" component={KhamPha} />
                        <Route exact path="/zingchart" component={ZingChart} />
                        <Route path="/moiphathanh" component={MoiPhatHanh} />
                        <Route
                            path="/album/:id"
                            exact
                            component={PlayList100}
                        />
                        <Route
                            path="/thong-tin-ca-si/:name/:id"
                            exact
                            component={ArtistInfomation}
                        />
                        <Route
                            path="/search/:name"
                            exact
                            component={SearchTrack}
                        />
                        <Route path="/:name/:id" exact component={BaiHat} />
                        <Route path="/login" exact component={LogIn} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}
export default Home;
