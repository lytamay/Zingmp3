import "./App.css";
import "./Component/Uilogo.jsx";
import Uilogo from "./Component/Uilogo.jsx";
import Home from "./Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
function App() {
    const [isChangeFromToHome, setIsChangeFromToHome] = useState(true);
    const ChangePageHome = (boolen) => {
        setIsChangeFromToHome(boolen);
    };
    return (
        <Router>
            {isChangeFromToHome ? (
                <Uilogo onClick={ChangePageHome} />
            ) : (
                <Home />
            )}
            {/* <Home /> */}
        </Router>
    );
}

export default App;
