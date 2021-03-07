import "./App.css";
import "./Component/Uilogo.jsx";
import Uilogo from "./Component/Uilogo.jsx";
import Home from "./Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDSqTqRE5QGsNczRmw5eVlJ1LQzEH7vrLk",
    authDomain: "playlist-music-9a8fe.firebaseapp.com",
};
firebase.initializeApp(config);
function App() {
    const [isChangeFromToHome, setIsChangeFromToHome] = useState(true);
    const ChangePageHome = (boolen) => {
        setIsChangeFromToHome(boolen);
    };
    // firebase
    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged(async (user) => {
                if (!user) {
                    console.log("user chua login");
                    return;
                }
                console.log("user da log in");
                const token = await user.getIdToken();
                console.log("log in user  token : ", token);
            });
        return () => unregisterAuthObserver();
    }, []);
    return (
        <Router>
            {isChangeFromToHome ? (
                <Uilogo onClick={ChangePageHome} />
            ) : (
                <Home />
            )}
        </Router>
    );
}

export default App;
