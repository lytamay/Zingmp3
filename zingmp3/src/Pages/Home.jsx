import React from "react";
import NavbarLeft from "../Component/NavbarLeft";
import ZingChat from "./ZingChat";
import "../Css/Home.css";
import KhamPha from "./KhamPha";
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
    let { path, url } = useRouteMatch();

    return (
        <div className="wraper">
            <div className="left">
                <NavbarLeft />
            </div>
            <div className="right">
                <div className="right-box">
                    <KhamPha />
                    {/* <Switch>
                        <Route path="/"> */}
                    {/* <Topic /> */}
                    {/* <KhamPha /> */}
                    {/* </Route> */}
                    {/* <Route path="/PlayList100">
                            <PlayList100 />
                        </Route> */}
                    {/* </Switch> */}
                    {/* <PlayList100 /> */}
                </div>
            </div>
        </div>
    );
}
export default Home;
