import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
const uiConfig = {
    signInFlow: "redirect",
    signInSuccessUrl: "/khampha",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
function LogIn() {
    const currentUser = firebase.auth().currentUser;
    const token = currentUser.getIdToken();
    console.log(token);
    return (
        <div>
            xin chao
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    );
}

export default LogIn;
