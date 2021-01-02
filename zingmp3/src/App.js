import "./App.css";
import "./Component/Uilogo.jsx";
import Uilogo from "./Component/Uilogo.jsx";
import Home from "./Pages/Home";
import ZingChat from "./Pages/ZingChat";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
        // <Router>
        //     <Switch>
        //         <Route path="/:id" children={<Child />} />
        //     </Switch>
        //     {/* <Uilogo />
        //     <Home />
        //     <ZingChat /> */}
        // </Router>
    );
}

export default App;
