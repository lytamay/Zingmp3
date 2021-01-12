import React from "react";
import NavbarLeft from "../Component/NavbarLeft";
import ZingChart from "./ZingChart";
import "../Css/Home.css";
import KhamPha from "./KhamPha";
import MoiPhatHanh from "./MoiPhatHanh";
import ArtistInfomation from "./ArtistInfomation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import PlayList100 from "./PlayList100";

function Home() {
    return (
        <div className="wraper">
            <div className="left">
                <NavbarLeft />
            </div>
            <div className="right">
                <div className="right-box">
                    <Switch>
                        <Route exact path="/khampha" component={KhamPha} />
                        <Route exact path="/zingchart" component={ZingChart} />
                        <Route path="/moiphathanh" component={MoiPhatHanh} />
                        <Route
                            path="/album/:id"
                            exact
                            component={PlayList100}
                        />
                        <Route
                            path="/thong-tin-ca-si/:name"
                            exact
                            component={ArtistInfomation}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
}
export default Home;
